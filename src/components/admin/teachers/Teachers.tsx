'use client'
import React, {useState} from 'react'
import styles from './Teachers.module.css'
import { teachers } from './teacher'
import PageTitle from '../shared/pageTitle/PageTitle'
import TeacherCard from '../shared/teacherCard/TeacherCard'

const Teachers = () => {
  const [teachersList, setTeachers] = useState(teachers)

  function deleteTeacher(id: number) {
    const newTeachersList = teachersList.filter((teacher) => teacher.id !== id)

    setTeachers(newTeachersList)
  }

  function editTeacher(id: number) {
    const editedTeacher = teachersList.filter((teacher) => teacher.id === id)
    console.log(editedTeacher)
  }

  return <section>
    <PageTitle title="Викладачі" isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} text='Додати викладача' />
    <div className={styles.teachers_content}>
      <div className={styles.teachers_list}>
        {teachersList && teachersList.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} deleteTeacher={deleteTeacher} editTeacher={editTeacher} />
        ))}
      </div>
    </div>
    
  </section>
}

export default Teachers
