import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export async function GET() {
  try {
    // Unauthenticated visitors only see published testimonials, without submitter emails
    const session = await getSession()
    const testimonials = session
      ? await prisma.testimonial.findMany()
      : await prisma.testimonial.findMany({
          where: { isPublished: true },
          select: { id: true, name: true, message: true, isPublished: true, createdAt: true }
        })
    return NextResponse.json(testimonials, { status: 200 })
  } catch (error) {
    console.log('[GET TESTIMONIALS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    const response = await prisma.testimonial.create({
      data: {
        name,
        email,
        message,
        isPublished: false
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log('[CREATE TESTIMONIAL]', error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
