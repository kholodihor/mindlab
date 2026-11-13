import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { destroyFile } from '@/config/cloudinary'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    const deleted = await prisma.document.delete({
      where: {
        id: params.id
      }
    })
    await destroyFile(deleted.fileId, 'DELETE DOCUMENT FILE')

    return NextResponse.json({ message: 'document deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE DOCUMENT]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
