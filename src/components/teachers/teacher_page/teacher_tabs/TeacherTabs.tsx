import React from 'react'
import styles from './TeacherTabs.module.css'

const TeacherTabs = () => {
  const tags = ['Формування системи лідерства', 'Корпоративна влада', 'Влада лідера']
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_container}>
        <button className={styles.tab}>Про викладача</button>
        <button className={`${styles.tab} ${styles.active}`}>Курси Викладача</button>
      </div>
      <div className={styles.content}>
        <h1 className={styles.content_title}>Leadership</h1>
        <p className={styles.content_paragraph}>
          це курс, який розкриє в тобі здатність впливати на інших, надихати і керувати командою
        </p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span className={`${styles.tag} ${index === 0 && styles.first}`} key={index}>
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeacherTabs
