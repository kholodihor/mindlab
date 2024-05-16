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
    const teacher = await prisma.teacher.findUnique({
      where: {
        id: params.id
      }
    })
    if (!teacher) {
      return new NextResponse('Teacher Not found', { status: 404 })
    }
    return NextResponse.json(teacher, { status: 200 })
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
    const updatedTeacher = await prisma.teacher.update({
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
        about_me_en: data.about_me_en,
        about_help_en: data.about_help_en,
        linkedinLink: data.linkedinLink,
        facebookLink: data.facebookLink,
        telegramLink: data.telegramLink,
        instagramLink: data.instagramLink
      }
    })
    return NextResponse.json(updatedTeacher, { status: 200 })
  } catch (error) {
    console.log('[UPDATE TEACHER]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    await prismaConnect()
    await prisma.teacher.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'teacher deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE COURSE', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
