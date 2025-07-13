'use server'
import { revalidatePath } from 'next/cache'
import  prisma  from '@/lib/prisma'
import { Todo } from '@prisma/client'


export const toogleTodo = async ( id: string, complete: boolean ): Promise<Todo> => {
    // esto tiene que ser un server actions
    const todo = await prisma.todo.findFirst({ where: { id } })
    if (!todo) throw new Error(`No se encontró la tarea con el id: '${id}'`)

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete: complete }
    })

    revalidatePath('/server-todos')
    return updatedTodo
}   


export const addTodo = async ( description: string ): Promise<Todo> => {
  
    try {
        const todo = await prisma.todo.create({ data: { description } })
        revalidatePath('/server-todos')
        return todo
    } catch (error) {
        
        throw new Error(`Error al crear la tarea: ${error}`)
    }
}

export const deleteCompleted = async (): Promise<void> => {
    try {  
        await prisma.todo.deleteMany({ where: { complete: true } })
        revalidatePath('/server-todos')
    } catch (error) {
        throw new Error(`Error al eliminar las tareas completadas: ${error}`)
    }
}
