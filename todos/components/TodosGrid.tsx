'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";

// import * as todosApi from '@/todos/helpers/todo';
import { useRouter } from "next/navigation";
import { NewTodo } from "./NewTodo";

import { toogleTodo } from "../actions/todo-action";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();

  // const toggleTodo = async(id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo( id, complete );
  //   // console.log({updatedTodo});
  //   router.refresh();
  // }

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 w-full">
      <div className="md:w-1/3 w-full">
        <NewTodo />
      </div>
      <div className="md:w-2/3 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl self-center">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toogleTodo} />
          ))}
        </div>
      </div>
    </div>
  )
}
