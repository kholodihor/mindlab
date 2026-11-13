import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { IContact } from '@/types/contacts'
import { requireAuth } from '@/lib/auth'

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    if (!params.id) {
      return new NextResponse('Contacts Not found', { status: 404 })
    }
    const data: IContact = await request.json()
    const updatedContact = await prisma.contacts.update({
      where: {
        id: params.id
      },
      data: {
        email: data.email,
        phone: data.phone,
        telegram: data.telegram,
        instagram: data.instagram,
        facebook: data.facebook
      }
    })
    return NextResponse.json(updatedContact, { status: 200 })
  } catch (error) {
    console.log('[UPDATE CONTACTS]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
