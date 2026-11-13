import prisma from '@/lib/prisma'
import { ITeacher } from '@/types/teachers'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { destroyFile } from '@/config/cloudinary'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
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
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    if (!params.id) {
      return new NextResponse('Teacher Not found', { status: 404 })
    }
    const data: ITeacher = await request.json()
    // Only look up the current image when the request saves a new one
    const existing = data.imageId
      ? await prisma.teacher.findUnique({ where: { id: params.id }, select: { imageId: true } })
      : null
    const updatedTeacher = await prisma.teacher.update({
      where: {
        id: params.id
      },
      data: {
        name_ua: data.name_ua,
        name_en: data.name_en,
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
    // A new image was uploaded: remove the replaced one from Cloudinary
    if (existing && existing.imageId !== data.imageId) {
      await destroyFile(existing.imageId, 'DELETE OLD IMAGE')
    }
    return NextResponse.json(updatedTeacher, { status: 200 })
  } catch (error) {
    console.log('[UPDATE TEACHER]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    const deleted = await prisma.teacher.delete({
      where: {
        id: params.id
      }
    })
    await destroyFile(deleted.imageId, 'DELETE TEACHER FILE')

    return NextResponse.json({ message: 'teacher deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE TEACHER]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
