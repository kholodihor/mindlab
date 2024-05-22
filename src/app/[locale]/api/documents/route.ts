import prisma from '@/lib/prisma'
import { IDocument } from '@/types/documents'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const documents = await prisma.document.findMany()
    return NextResponse.json(documents, { status: 200 })
  } catch (error) {
    console.log('[GET DOCUMENTS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
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

// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//   if (!params.id) {
//     return new NextResponse('Not found', { status: 404 })
//   }
//   try {
//     await prismaConnect()
//     await prisma.document.delete({
//       where: {
//         id: params.id
//       }
//     })

//     return NextResponse.json({ message: 'document deleted successfully' }, { status: 200 })
//   } catch (error) {
//     console.log('[DELETE DOCUMENT', error)
//     return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
//   }
// }
