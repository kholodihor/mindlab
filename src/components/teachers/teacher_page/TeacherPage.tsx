'use client'
import React from 'react'
import { useTeachers } from '@/hooks/swr/useTeachers'
import ArrowLeft from '@/components/icons/ArrowLeft'
import styles from './TeacherPage.module.css'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import LinkedinIconXL from '@/components/icons/LinkedinIconXL'
import FacebookIconXL from '@/components/icons/FacebookIconXL'
import TelegramIconXL from '@/components/icons/TelegramIconXL'
import TeacherTabs from './teacher_tabs/TeacherTabs'
import { ITeacherResponse } from '@/types/teachers'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

const TeacherPage = ({ id }: { id: string }) => {
  const { teachers } = useTeachers()
  const teacher = teachers?.find((teacher) => teacher.id === id) as ITeacherResponse
  const t = useTranslations('Speakers')
  const locale = useLocale()
  
  return (
    <div className={styles.page}>
      <a href={`/${locale}#teachers`} className={styles.link}>
        <ArrowLeft />
        <p>{t('otherspeakers')}</p>
      </a>
      {!teacher ? (
        <p className={styles.error}>{t('notFoundTeacher')}</p>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.teacher}>
            <div className={styles.card}>
              <TeacherCard teacher={teacher} />
            </div>
            <div className={styles.icons}>
              <FacebookIconXL />
              <TelegramIconXL />
              <LinkedinIconXL />
            </div>
          </div>
          <TeacherTabs teacher={teacher} />
          <Image
            width={20}
            height={20}
            src={'/speaker_page/star.svg'}
            alt="star"
            className={styles.star_small}
          />
          <Image
            width={50}
            height={50}
            src={'/speaker_page/star.svg'}
            alt="star"
            className={styles.star_large}
          />
          <Image
            width={35}
            height={35}
            src={'/speaker_page/star.svg'}
            alt="star"
            className={styles.star_medium}
          />
        </div>
      )}
    </div>
  )
}

export default TeacherPage
