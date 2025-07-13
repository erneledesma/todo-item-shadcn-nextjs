import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

await prisma.todo.deleteMany(); // delete all todos

await prisma.todo.createMany({
       data: [
        { description: 'Piedra del alma', complete: true},
        { description: 'Piedra del tiempo'},
        { description: 'Piedra de la mente'},
        { description: 'Piedra de la realidad'},
        { description: 'Piedra del poder'},
        { description: 'Piedra del espacio  '},     
    ],
});
   

    return NextResponse.json({
        message: 'Seed serverless function!'
    })
}