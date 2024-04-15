import React from 'react'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import { ITeacherResponse } from '@/types/teachers'

const TeacherCard = ({ teacher }: { teacher: ITeacherResponse }) => {
  return (
    <div className={styles.card}>
      <Image
        width={189}
        height={202}
        src={teacher.imageUrl}
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
