import prisma from '@/lib/prisma'
import { IPartners } from '@/types/partners'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    const partners = await prisma.partners.findMany()
    return NextResponse.json(partners, { status: 200 })
  } catch (error) {
    console.log('[GET PARTNERS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const data: IPartners = await request.json()
    const response = await prisma.partners.create({
      data: {
        nameUa: data.nameUa,
        nameEn: data.nameEn,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
        descriptionUa: data.descriptionUa,
        descriptionEn: data.descriptionEn,
        color: data.color,
        websiteLink: data.websiteLink
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
