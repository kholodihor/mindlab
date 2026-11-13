import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

// Changes the password of the currently signed-in admin
export async function POST(request: Request) {
  const session = await getSession()
  const email = session?.user?.email
  if (!email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { password } = await request.json()
    if (typeof password !== 'string' || password.length < 6) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 422 })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.update({ where: { email }, data: { hashedPassword } })
    return NextResponse.json({ message: 'Password changed' }, { status: 200 })
  } catch (error) {
    console.log('[CHANGE PASSWORD]', error)
    return NextResponse.json({ message: 'Cannot change password' }, { status: 500 })
  }
}
