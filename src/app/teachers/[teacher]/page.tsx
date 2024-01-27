import React from 'react'
import { teachers } from '@/data/teachers'
import ArrowLeft from '@/components/icons/ArrowLeft'
import { Teacher } from '@/types'
import styles from './page.module.css'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import LinkedinIconXL from '@/components/icons/LinkedinIconXL'
import FacebokIconXL from '@/components/icons/FacebokIconXL'
import TelegramIconXL from '@/components/icons/TelegramIconXL'

const page = ({ params }: { params: { teacher: string } }) => {
  const teacher = teachers.find((teacher) => teacher.key === params.teacher) as Teacher

  return (
    <div className={`container ${styles.page}`}>
      <a href="/#courses" className={styles.link}>
        <ArrowLeft />
        <p>До інших викладачів</p>
      </a>
      {!teacher ? (
        <p className={styles.error}>Такого курсу не знайдено. Спробуйте знову.</p>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.teacher}>
            <div className={styles.card}>
              <TeacherCard teacher={teacher} />
            </div>
            <div className={styles.icons}>
              <FacebokIconXL />
              <TelegramIconXL />
              <LinkedinIconXL />
            </div>
          </div>
          <div className={styles.tabs}>{teacher.name}</div>
        </div>
      )}
    </div>
  )
}

export default page
