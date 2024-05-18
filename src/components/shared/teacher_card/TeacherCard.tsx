import React from 'react'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import { ITeacherResponse } from '@/types/teachers'
import { useLocale } from 'next-intl'

const TeacherCard = ({ teacher }: { teacher: ITeacherResponse }) => {
  const locale = useLocale()
  return (
    <div className={styles.card}>
      <Image
        width={189}
        height={202}
        src={teacher.imageUrl}
        alt={locale === 'en' ? teacher.name_en : teacher.name_ua}
        className={styles.image}
      />
      <h3 className={styles.name}>{locale === 'en' ? teacher.name_en : teacher.name_ua}</h3>
      <p className={styles.speciality}>{teacher.speciality}</p>
      <Image width={189} height={202} src="/teachers/mask.png" alt="mask" className={styles.mask} />
    </div>
  )
}

export default TeacherCard
