'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname.split('/').includes('admin') || pathname.split('/').includes('login')
  return (
    <>
      {!isAdminPage ? <Header /> : null}
      {children}
      {!isAdminPage ? <Footer /> : null}
    </>
  )
}
