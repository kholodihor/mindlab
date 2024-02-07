import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany()
    return NextResponse.json(testimonials, { status: 200 })
  } catch (error) {
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
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
