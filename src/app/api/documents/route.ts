import prisma from '@/lib/prisma'
import { IDocument } from '@/types/documents'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    const documents = await prisma.document.findMany()
    return NextResponse.json(documents, { status: 200 })
  } catch (error) {
    console.log('[GET DOCUMENTS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const data: IDocument = await request.json()
    const response = await prisma.document.create({
      data: {
        fileName_ua: data.fileName_ua,
        fileName_en: data.fileName_en,
        fileUrl: data.fileUrl,
        fileId: data.fileId
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
