import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getSession, requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    // excelLink points at the response spreadsheet: admins only
    const session = await getSession()
    const forms = session
      ? await prisma.form.findMany()
      : await prisma.form.findMany({ select: { id: true, name: true, formLink: true } })
    return NextResponse.json(forms, { status: 200 })
  } catch (error) {
    console.log('[GET FORMS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
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
