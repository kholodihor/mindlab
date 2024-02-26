'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Admin = () => {
  const router = useRouter()
  const { data: session } = useSession()

  console.log(session)

  useEffect(() => {
    if (!session && !session?.user) {
      router.replace('/login')
    }
  }, [session, router])

  return <div>{session && session.user?.email}</div>
}

export default Admin
