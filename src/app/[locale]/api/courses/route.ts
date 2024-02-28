import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const courses = await prisma.course.findMany()
    return NextResponse.json(courses, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const { title, description, tag1, tag2, teacherId } = await request.json()
    const response = await prisma.course.create({
      data: {
        title,
        description,
        tags: [tag1, tag2],
        teacherIds: [teacherId]
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
