import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

import * as yup from 'yup'

export async function GET(request: Request) { 
 const { searchParams } = new URL(request.url)
 const take = Number(searchParams.get('take') ?? '10');
 const skip = Number(searchParams.get('skip') ?? '0');

 if(isNaN(take)) {
    return NextResponse.json({ error: ' Take, Invalid take parameter is a number' }, { status: 400 })
 }

 if(isNaN(skip)) {
    return NextResponse.json({ error: 'Skip, Invalid take parameter is a number' }, { status: 400 })
 }


 const todos = await prisma.todo.findMany({
    take, 
    skip
 });

 return NextResponse.json(todos)
 
}

const postSchema = yup.object().shape({
   description: yup.string().required(),
   complete: yup.boolean().required().default(false)
})


export async function POST(request: Request) {

   try {
      const { complete, description} = await postSchema.validate(await request.json() )
      const todo = await prisma.todo.create({ data: { complete, description } })
      return NextResponse.json(todo, { status: 201 })
      
   } catch (error) {
      return NextResponse.json({ error: error }, { status: 400 })
   }

}

export async function DELETE(request: Request) {

   try {
      await prisma.todo.deleteMany({ where: { complete: true } })
      return NextResponse.json('Deleted', { status: 200 })
      
   } catch (error) {
      return NextResponse.json({ error: error }, { status: 400 })
   }

}