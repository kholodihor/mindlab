import prisma from '@/lib/prisma'
// import { IDocument } from '@/types/documents'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const forms = await prisma.form.findMany()
    return NextResponse.json(forms, { status: 200 })
  } catch (error) {
    console.log('[GET FORMS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const data = await request.json()
    const response = await prisma.form.create({
      data: {
        name: data.name,
        formLink: data.formLink,
        excelLink: data.excelLink
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log('CREATE FORM', error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
