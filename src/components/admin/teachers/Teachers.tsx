'use client'

import { useState } from 'react'
import { useTeachers } from '@/hooks/swr/useTeachers'
import Swal from 'sweetalert2'
import PageTitle from '../shared/pageTitle/PageTitle'
import TeacherCard from '../shared/teacherCard/TeacherCard'
import Loader from '../shared/loader/Loader'
import styles from './Teachers.module.css'

const Teachers = () => {
  const { teachers, deleteTeacher, isLoading } = useTeachers()
  const [isProcessing, setisProcessing] = useState(false)
  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити викладача?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити викладача'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTeacher(id)
      }
    })
  }

  const handleDeleteTeacher = async (id: string) => {
    setisProcessing(true)
    try {
      await deleteTeacher(id)
      Swal.fire({
        title: 'Викладача успішно видалено',
        icon: 'success'
      })
    } catch (error) {
      Swal.fire({
        title: 'Щось пішло не так',
        icon: 'error'
      })
    } finally {
      setisProcessing(false)
    }
  }

  return (
    <section className={styles.wrapper}>
      <PageTitle
        title="Викладачі"
        isAddButtonDisplayed={true}
        isSettingsButtonDisplayed={true}
        text="Додати викладача"
        href="teachers/add"
      />
      <div className={styles.teachers_content}>
        <div className={styles.teachers_list}>
          {teachers &&
            teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} deleteTeacher={handleDelete} />
            ))}
        </div>
      </div>
      {(isLoading || isProcessing) && <Loader />}
    </section>
  )
}

export default Teachers
