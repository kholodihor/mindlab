'use client'

import Link from 'next/link'
import Lottie from 'lottie-react'
import not_found from '@/animations/not_found.json'
import MainButton from '../ui/main_button/MainButton'
import { useTranslations } from 'next-intl'
import styles from './Page404.module.css'

const Page404 = () => {
  const t = useTranslations('404')
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.lottie_wrapper}>
        <Lottie animationData={not_found} loop={false} className={styles.lottie} />
        <h1 className={styles.title}>{t('message')}</h1>
        <Link href="/" className={styles.button}>
          <MainButton title={t('button')} />
        </Link>
      </div>
    </div>
  )
}

export default Page404
