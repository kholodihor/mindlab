import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { ICourse } from '@/types/courses'
import { toCourseData } from '../toCourseData'
import { requireAuth } from '@/lib/auth'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: params.id
      }
    })
    if (!course) {
      return new NextResponse('Course Not found', { status: 404 })
    }
    return NextResponse.json(course, { status: 200 })
  } catch (error) {
    console.log('[GET COURSE BY ID]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    if (!params.id) {
      return new NextResponse('Course Not found', { status: 404 })
    }
    const data: ICourse = await request.json()
    const updatedCourse = await prisma.course.update({
      where: {
        id: params.id
      },
      data: toCourseData(data)
    })
    return NextResponse.json(updatedCourse, { status: 200 })
  } catch (error) {
    console.log('[UPDATE COURSE]', error)
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
    await prisma.course.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'course deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE COURSE]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
