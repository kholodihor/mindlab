import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { IContact } from '@/types/contacts'
import { requireAuth } from '@/lib/auth'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string; name: string } }
) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const data: IContact = await request.json()
    const updatedContact: IContact = await prisma.contacts.update({
      where: {
        id: params.id
      },
      data: {
        email: params.name === 'email' ? '' : data.email,
        phone: params.name === 'phone' ? '' : data.phone,
        telegram: params.name === 'telegram' ? '' : data.telegram,
        instagram: params.name === 'instagram' ? '' : data.instagram,
        facebook: params.name === 'facebook' ? '' : data.facebook
      }
    })
    return NextResponse.json(updatedContact, { status: 200 })
  } catch (error) {
    console.log('[DELETE CONTACTS]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
