"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
// import * as todosApi from "@/todos/helpers/todo"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"

import { addTodo, deleteCompleted } from "../actions/todo-action";


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Escriba la tarea",
  }),
})

export const NewTodo = () => {

// const router = useRouter();
const form = useForm();
const [description, setDescription] = useState('')

const onSubmit = async ( e: FormEvent) => {
  e.preventDefault();
  if(description.trim().length === 0 ) return;
    await addTodo( description);
    setDescription('');

}

// const deleteCompletedTodo = async () => {
//   await deleteCompleted();
  
// }


  return (  
    <Form {...form}>
    <form onSubmit={onSubmit} className="space-y-8">
      <FormField
        control={form.control}
        name="task"
        render={({ field }) => (
          <FormItem>
            <FormLabel>New task</FormLabel>
            <FormControl>
              <Input placeholder="new task" onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormDescription>
              Puede redactar una nueva tarea
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex items-center">
        <Button type="submit">
            Agregar tarea
        </Button>

        <Button variant="secondary" className="ml-2" onClick={ () => deleteCompleted()}>
            <Trash className="mr-2 h-4 w-4" /> Eliminar
        </Button>
      </div>
    </form>
  </Form>
  )

}

