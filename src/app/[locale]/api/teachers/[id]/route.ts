import prisma from '@/lib/prisma'
import { ITeacher } from '@/types/teachers'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    await prismaConnect()
    const course = await prisma.teacher.findUnique({
      where: {
        id: params.id
      }
    })
    if (!course) {
      return new NextResponse('Teacher Not found', { status: 404 })
    }
    return NextResponse.json(course, { status: 200 })
  } catch (error) {
    console.log('[GET TEACHER BY ID]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return new NextResponse('Teacher Not found', { status: 404 })
    }
    await prismaConnect()
    const data: ITeacher = await request.json()
    const updatedCourse = await prisma.teacher.update({
      where: {
        id: params.id
      },
      data: {
        name: data.name,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
        speciality: data.speciality,
        about_me: data.about_me,
        about_help: data.about_help,
        linkedinLink: data.linkedinLink,
        facebookLink: data.facebookLink,
        telegramLink: data.facebookLink
      }
    })
    return NextResponse.json(updatedCourse, { status: 200 })
  } catch (error) {
    console.log('[UPDATE TEACHER]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
