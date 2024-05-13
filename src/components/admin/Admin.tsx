'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'

const Admin = () => {
  const router = useRouter()
  // const { data: session } = useSession()

  // console.log(session)

  // useEffect(() => {
  //   if (!session && !session?.user) {
  //     router.replace('/login')
  //   } else {
  //     router.replace('/admin/courses')
  //   }
  // }, [session, router])

  useEffect(() => {
    router.replace('/admin/courses')
  }, [router])

  return null
}

export default Admin
