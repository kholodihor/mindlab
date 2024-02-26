import React from 'react'
import styles from './AboutTeacher.module.css'
import { ITeacherResponse } from '@/types/teachers'

const AboutTeacher = ({ data }: { data: ITeacherResponse }) => {
  return (
    <div className={styles.about}>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>1 |</span> Про мене
        </h1>
        <p className={styles.about_paragraph}>{data.about_me}</p>
      </div>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>2 |</span> З чим я можу допомогти
        </h1>
        <p className={styles.about_paragraph}>{data.about_help}</p>
      </div>
    </div>
  )
}

export default AboutTeacher
