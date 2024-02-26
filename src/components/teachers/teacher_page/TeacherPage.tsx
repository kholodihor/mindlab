'use client'
import React from 'react'
import { useTeachers } from '@/hooks/swr/useTeachers'
import ArrowLeft from '@/components/icons/ArrowLeft'
import styles from './TeacherPage.module.css'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import LinkedinIconXL from '@/components/icons/LinkedinIconXL'
import FacebokIconXL from '@/components/icons/FacebokIconXL'
import TelegramIconXL from '@/components/icons/TelegramIconXL'
import TeacherTabs from './teacher_tabs/TeacherTabs'
import { ITeacherResponse } from '@/types/teachers'

const TeacherPage = ({ id }: { id: string }) => {
  const { teachers } = useTeachers()
  const teacher = teachers?.find((teacher) => teacher.id === id) as ITeacherResponse

  return (
    <div className={styles.page}>
      <a href="/#teachers" className={styles.link}>
        <ArrowLeft />
        <p>До інших викладачів</p>
      </a>
      {!teacher ? (
        <p className={styles.error}>Такого викладача не знайдено. Спробуйте знову.</p>
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
          <TeacherTabs teacher={teacher} />
        </div>
      )}
    </div>
  )
}

export default TeacherPage
