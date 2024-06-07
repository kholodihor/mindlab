'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import styles from './RotatingStar.module.css'

const RotatingStar = () => {
  const locale = useLocale()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Image
        width={100}
        height={100}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.rotating_star}
        src={locale === 'en' ? '/hero/rotating_star_en.svg' : '/hero/rotating_star.svg'}
        alt="Отримати консультацію"
      />
      {isHovered ? (
        <Image width={85} height={85} className={styles.smile} src="/hero/smile2.svg" alt="smile" />
      ) : (
        <Image width={85} height={85} className={styles.smile} src="/hero/smile.svg" alt="smile" />
      )}
    </div>
  )
}

export default RotatingStar
