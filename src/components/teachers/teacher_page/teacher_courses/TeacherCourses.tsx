import React from 'react'
import styles from './TeacherCourses.module.css'

// const tags = ['Формування системи лідерства', 'Корпоративна влада', 'Влада лідера']

type TeacherCoursesProps = {
  data: {
    title: string
    description: string
    tags: string[]
  }[]
}

const TeacherCourses = ({ data }: TeacherCoursesProps) => {
  return (
    <>
      {data.map((item, index) => (
        <div className={styles.content} key={index}>
          <h1 className={styles.content_title}>{item.title}</h1>
          <p className={styles.content_paragraph}>{item.description}</p>
          <div className={styles.tags}>
            {item.tags.map((tag, index) => (
              <span className={`${styles.tag} ${index === 0 && styles.first}`} key={index}>
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TeacherCourses
