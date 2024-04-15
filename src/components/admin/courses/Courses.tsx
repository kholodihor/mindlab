import React from 'react'
import styles from './Courses.module.css'
import { coursesList } from '@/data/data'
import { useTranslations } from 'next-intl'
import PageTitle from '../shared/pageTitle/PageTitle'
import EditIcon from '../shared/icons/EditIcon'
import DeleteIcon from '../shared/icons/DeleteIcon'

const Courses = () => {
  const t = useTranslations("Courses")
  return <>
    <PageTitle title='курси' isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} />

    <main className={styles.main_content}>
      <div className={styles.wrapper}>
        <ul className={styles.courses}>
          {coursesList.map(
            ({ title, description }) => (
              <li className={styles.courses_card} key={title}>
                <div className={styles.course_content}>
                  <h3 className={styles.course_title}>{title}</h3>
                  <p className={styles.courses_description}>{t(description)}</p>
                </div>
                <div className={styles.button_block}>
                  <button type='button' className={styles.button_edit}>
                    <EditIcon />
                  </button>
                  <button type='button' className={styles.button_delete}>
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </main>
  </>
}

export default Courses