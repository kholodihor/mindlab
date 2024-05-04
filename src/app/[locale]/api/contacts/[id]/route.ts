import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'
import { IContact } from '@/types/contacts'

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return new NextResponse('Contacts Not found', { status: 404 })
    }
    await prismaConnect()
    const data: IContact = await request.json()
    const updatedContact = await prisma.contacts.update({
      where: {
        id: params.id
      },
      data: {
        email: data.email && data.email,
        phone: data.phone && data.phone,
        telegram: data.telegram && data.telegram,
        instagram: data.instagram && data.instagram,
        facebook: data.facebook && data.facebook
      }
    })
    return NextResponse.json(updatedContact, { status: 200 })
  } catch (error) {
    console.log('[UPDATE CONTACTS]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return new NextResponse('Contacts Not found', { status: 404 })
    }
    await prismaConnect()
    const data: any = await request.json()
    console.log(data)
  } catch (error) {
    console.log('[UPDATE CONTACTS]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
