import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { IPartners } from '@/types/partners'
import { requireAuth } from '@/lib/auth'
import { destroyFile } from '@/config/cloudinary'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    const partner = await prisma.partners.findUnique({
      where: {
        id: params.id
      }
    })
    if (!partner) {
      return new NextResponse('Partner Not found', { status: 404 })
    }
    return NextResponse.json(partner, { status: 200 })
  } catch (error) {
    console.log('[GET PARTNER BY ID]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    if (!params.id) {
      return new NextResponse('Partner Not found', { status: 404 })
    }
    const data: IPartners = await request.json()
    // Only look up the current image when the request saves a new one
    const existing = data.imageId
      ? await prisma.partners.findUnique({ where: { id: params.id }, select: { imageId: true } })
      : null
    const updatedPartner = await prisma.partners.update({
      where: {
        id: params.id
      },
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
    // A new image was uploaded: remove the replaced one from Cloudinary
    if (existing && existing.imageId !== data.imageId) {
      await destroyFile(existing.imageId, 'DELETE OLD IMAGE')
    }
    return NextResponse.json(updatedPartner, { status: 200 })
  } catch (error) {
    console.log('[UPDATE Partner]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  if (!params.id) {
    return new NextResponse('Partner Not found', { status: 404 })
  }
  try {
    const deleted = await prisma.partners.delete({
      where: {
        id: params.id
      }
    })
    await destroyFile(deleted.imageId, 'DELETE PARTNER FILE')

    return NextResponse.json({ message: 'partner deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE PARTNER]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
