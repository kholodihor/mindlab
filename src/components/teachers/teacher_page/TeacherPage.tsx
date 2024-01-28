'use client'
import React from 'react'
import { teachers } from '@/data/teachers'
import ArrowLeft from '@/components/icons/ArrowLeft'
import { Teacher } from '@/types'
import styles from './TeacherPage.module.css'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import LinkedinIconXL from '@/components/icons/LinkedinIconXL'
import FacebokIconXL from '@/components/icons/FacebokIconXL'
import TelegramIconXL from '@/components/icons/TelegramIconXL'
import TeacherTabs from './teacher_tabs/TeacherTabs'

const TeacherPage = ({ nameKey }: { nameKey: string }) => {
  const teacher = teachers.find((teacher) => teacher.key === nameKey) as Teacher

  return (
    <div className={`${styles.page}`}>
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
          <TeacherTabs />
        </div>
      )}
    </div>
  )
}

export default TeacherPage
