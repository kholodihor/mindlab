import React from 'react'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import { Teacher } from '@/types'

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className={styles.card}>
      <Image
        width={189}
        height={202}
        src={teacher.image}
        alt={teacher.name}
        className={styles.image}
      />
      <h3 className={styles.name}>{teacher.name}</h3>
      <p className={styles.speciality}>{teacher.speciality}</p>
      <Image width={189} height={202} src="/teachers/mask.png" alt="mask" className={styles.mask} />
    </div>
  )
}

export default TeacherCard
