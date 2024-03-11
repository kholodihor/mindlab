'use client'

import Link from 'next/link'
import Lottie from 'lottie-react'
import not_found from '@/animations/not_found.json'
import styles from './Page404.module.css'
import MainButton from '../ui/main_button/MainButton'

const Page404 = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.lottie_wrapper}>
        <Lottie animationData={not_found} loop={false} className={styles.lottie} />
        <h1 className={styles.title}>перейдіть, будь ласка, до головної сторінки</h1>

        <Link href="/" className={styles.button}>
          <MainButton title="На головну сторінку" />
        </Link>
      </div>
    </div>
  )
}

export default Page404
