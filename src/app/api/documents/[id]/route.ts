import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    await prismaConnect()
    await prisma.document.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'document deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE DOCUMENT', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}