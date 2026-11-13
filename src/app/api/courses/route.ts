import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { ICourse } from '@/types/courses'
import { toCourseData } from './toCourseData'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    const courses = await prisma.course.findMany()
    return NextResponse.json(courses, { status: 200 })
  } catch (error) {
    console.log('[GET COURSES]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const data: ICourse = await request.json()
    const response = await prisma.course.create({ data: toCourseData(data) })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log('[CREATE COURSE]', error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
