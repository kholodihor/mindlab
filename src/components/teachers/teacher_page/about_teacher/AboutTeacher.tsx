import React from 'react'
import styles from './AboutTeacher.module.css'

const AboutTeacher = ({ data }: { data: string[] }) => {
  return (
    <div className={styles.about}>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>1 |</span> Про мене
        </h1>
        <p className={styles.about_paragraph}>{data[0]}</p>
      </div>
      <div>
        <h1 className={styles.about_title}>
          <span className={styles.order}>2 |</span> З чим я можу допомогти
        </h1>
        <p className={styles.about_paragraph}>{data[1]}</p>
      </div>
    </div>
  )
}

export default AboutTeacher
