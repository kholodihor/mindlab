import React from 'react'
import styles from './AboutTeacher.module.css'
import { ITeacherResponse } from '@/types/teachers'
import { useTranslations, useLocale } from 'next-intl'

const AboutTeacher = ({ teacher }: { teacher: ITeacherResponse }) => {
  const locale = useLocale()
  const t = useTranslations('Speakers.aboutSpeaker')

  return (
    <div className={styles.about}>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>1 |</span> {t('aboutMe')}
        </h1>
        <p className={styles.about_paragraph}>
          {locale === 'ua' ? teacher.about_me : teacher.about_me_en}
        </p>
      </div>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>2 |</span> {t('help')}
        </h1>
        <p className={styles.about_paragraph}>
          {locale === 'ua' ? teacher.about_help : teacher.about_help_en}
        </p>
      </div>
    </div>
  )
}

export default AboutTeacher
