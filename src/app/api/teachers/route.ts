import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const teachers = await prisma.teacher.findMany()
    return NextResponse.json(teachers, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const { name, image, speciality } = await request.json()
    const response = await prisma.teacher.create({
      data: {
        name,
        image,
        speciality
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
