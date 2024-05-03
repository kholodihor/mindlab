import prisma from '@/lib/prisma'
import { IContact } from '@/types/contacts'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const contacts = await prisma.contact.findMany()
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.log('[GET CONTACTS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const data: IContact = await request.json()
    const response = await prisma.contact.create({
      data: {
        name: data.name,
        value: data.value,
        icon: data.icon,
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
