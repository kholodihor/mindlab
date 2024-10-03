/* eslint-disable @typescript-eslint/ban-ts-comment */

import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text'
        },
        password: {
          label: 'password',
          type: 'password'
        }
      },
      // @ts-ignore
      async authorize(credentials: { email: string; password: string }) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error('Invalid email or password')
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (!user || !user?.hashedPassword) {
            throw new Error('User not found')
          }

          const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

          if (!isCorrectPassword) {
            throw new Error('Invalid email or password')
          }

          return user
        } catch (error) {
          console.log(error)
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  session: {
    strategy: 'jwt'
  }
})

export { handler as GET, handler as POST }
