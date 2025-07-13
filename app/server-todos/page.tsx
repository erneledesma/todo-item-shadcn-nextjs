import Link from "next/link"


import prisma from "@/lib/prisma"
import { TodosGrid } from "@/todos"
import { NewTodo } from "../../todos/components/NewTodo"

export const metadata = {
    title: 'Lista de todos',
    description: 'App para generar listas de tareas',
}

export default async function ServerTodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Server Actions <br className="hidden sm:inline" />
        </h2>
        <NewTodo />
        <TodosGrid todos={todos} />

      </div>
    </section>
  )
}
