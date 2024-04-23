import prisma from '@/lib/prisma'
import { ITeacher } from '@/types/teachers'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const teachers = await prisma.teacher.findMany()
    return NextResponse.json(teachers, { status: 200 })
  } catch (error) {
    console.log('[GET TEACHERS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const data: ITeacher = await request.json()
    const response = await prisma.teacher.create({
      data: {
        name: data.name,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
        speciality: data.speciality,
        about_me: data.about,
        about_help: data.help,
        linkedinLink: data.linkedinUrl,
        facebookLink: data.facebookUrl,
        telegramLink: data.facebookUrl
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
