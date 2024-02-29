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
import { useTranslations } from 'next-intl'

const TeacherPage = ({ id }: { id: string }) => {
  const { teachers } = useTeachers()
  const teacher = teachers?.find((teacher) => teacher.id === id) as ITeacherResponse
const t = useTranslations("Spiekers")
  return (
    <div className={styles.page}>
      <a href="/#teachers" className={styles.link}>
        <ArrowLeft />
        <p>{t("otherpiekers")}</p>
      </a>
      {!teacher ? (
        <p className={styles.error}>{t("notFoundTeatcher")}</p>
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
