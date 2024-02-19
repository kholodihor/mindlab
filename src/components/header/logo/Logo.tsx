'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import logo_open from '@/animations/logo_open.json'
import logo_close from '@/animations/logo_close.json'
import styles from './Logo.module.css'

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/">
      <div
        className={styles.logo}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Lottie animationData={isHovered ? logo_open : logo_close} loop={false} />
      </div>
    </Link>
  )
}

export default Logo
