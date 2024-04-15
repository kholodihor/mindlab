'use client'
import React, {useState} from 'react'
import styles from './Teachers.module.css'
import { teachers } from './teacher'
import PageTitle from '../shared/pageTitle/PageTitle'
import TeacherCard from '../shared/teacherCard/TeacherCard'

const Teachers = () => {
  const [teachersList, setTeachers] = useState(teachers)

  function deleteTeacher(id: number) {
    const newTeachersList = teachersList.filter((teacher) => Number(teacher.id) !== id)

    setTeachers(newTeachersList)
  }

  return <section>
    <PageTitle title="Викладачі" isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} text='Додати викладача' href='teachers/add' />
    <div className={styles.teachers_content}>
      <div className={styles.teachers_list}>
        {teachersList && teachersList.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} deleteTeacher={deleteTeacher} />
        ))}
      </div>
    </div>
    
  </section>
}

export default Teachers
