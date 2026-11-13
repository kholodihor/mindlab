import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

// Creates an admin user. Open only while no users exist (first-admin bootstrap);
// afterwards only a signed-in admin can create another one.
export async function POST(request: Request) {
  try {
    if ((await prisma.user.count()) > 0) {
      const unauthorized = await requireAuth()
      if (unauthorized) return unauthorized
    }
    const { email, password } = await request.json()
    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
      return NextResponse.json({ message: 'Bad Credentials' }, { status: 422 })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { email, hashedPassword } })

    return NextResponse.json({ user: { id: user.id, email: user.email } }, { status: 201 })
  } catch (error) {
    console.log('[REGISTER]', error)
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 })
  }
}
