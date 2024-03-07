import React from 'react'
import styles from './AboutTeacher.module.css'
import { ITeacherResponse } from '@/types/teachers'
import { useTranslations } from 'next-intl'

const AboutTeacher = ({ data }: { data: ITeacherResponse }) => {
  const t = useTranslations("Speakers.aboutSpeaker")
  return (
    <div className={styles.about}>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>1 |</span> {t("aboutMe")}
        </h1>
        <p className={styles.about_paragraph}>{data.about_me}</p>
      </div>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>2 |</span> {t("help")}
        </h1>
        <p className={styles.about_paragraph}>{data.about_help}</p>
      </div>
    </div>
  )
}

export default AboutTeacher
