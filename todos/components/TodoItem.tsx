'use client';

import { useOptimistic, startTransition } from "react";
import { Todo } from "@prisma/client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>
}


export const TodoItem = ({ todo, toggleTodo }: Props) => {

  const [todoOptimistic, settoggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newComleteValue: boolean) => ({ ...state, complete: newComleteValue }
    )
  )

  const onToogleTodo = async () => {
    try {
      startTransition( () => settoggleTodoOptimistic(!todoOptimistic.complete) )  
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      startTransition( () =>  settoggleTodoOptimistic(!todoOptimistic.complete) )
    }
  }


  return (
    <Card className="mb-2">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <div
          onClick={onToogleTodo}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? 'bg-blue-100' : 'bg-red-100'}`}
        >
          {todoOptimistic.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />}
        </div>
        <span className={`text-lg ${todoOptimistic.complete ? 'line-through text-muted-foreground' : ''}`}>{todoOptimistic.description}</span>
      </CardHeader>
    </Card>
  )
}
