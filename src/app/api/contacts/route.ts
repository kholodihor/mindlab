import prisma from '@/lib/prisma'
import { IContact } from '@/types/contacts'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    const contacts = await prisma.contacts.findMany()
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.log('[GET CONTACTS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const data: IContact = await request.json()
    const response = await prisma.contacts.create({
      data: {
        email: data.email,
        phone: data.phone,
        telegram: data.telegram,
        instagram: data.instagram,
        facebook: data.facebook
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
