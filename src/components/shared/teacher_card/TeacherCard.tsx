import React from 'react'
import Image from 'next/image'
import { Teacher } from '@/types'
import styles from './TeacherCard.module.css'

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <>
      <Image
        width={200}
        height={200}
        src={teacher.image}
        alt={teacher.name}
        className={styles.image}
      />
      <h3 className={styles.name}>{teacher.name}</h3>
      <p className={styles.speciality}>{teacher.speciality}</p>
      <Image width={200} height={200} src="/teachers/mask.png" alt="mask" className={styles.mask} />
    </>
  )
}

export default TeacherCard
