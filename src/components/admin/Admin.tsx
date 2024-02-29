'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import styles from './Admin.module.css'

const Admin = () => {
  const router = useRouter()
  const { data: session } = useSession()

  console.log(session)

  useEffect(() => {
    if (!session && !session?.user) {
      router.replace('/login')
    }
  }, [session, router])

  return (
    <div className={styles.page}>
      <h1>Admin</h1>
      {session && session.user?.email}
    </div>
  )
}

export default Admin
