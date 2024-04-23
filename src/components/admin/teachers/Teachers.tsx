'use client'

import styles from './Teachers.module.css'
import { useTeachers } from '@/hooks/swr/useTeachers'
import PageTitle from '../shared/pageTitle/PageTitle'
import TeacherCard from '../shared/teacherCard/TeacherCard'

const Teachers = () => {
  const { teachers, deleteTeacher, isLoading } = useTeachers()

  const handleDelete = (id: string, imageId: string) => {
    if (confirm('Ви впевнені, що хочете видалити цього викладача?')) {
      deleteTeacher(id, imageId)
      console.log(imageId)
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <section>
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
    </section>
  )
}

export default Teachers
