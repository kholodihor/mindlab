'use client'

import styles from './Teachers.module.css'
import { useTeachers } from '@/hooks/swr/useTeachers'
import { useModal } from '@/stores/useModal'
import PageTitle from '../shared/pageTitle/PageTitle'
import TeacherCard from '../shared/teacherCard/TeacherCard'
import ConfirmModal from '@/components/modals/confirmModal/ConfirmModal'

const Teachers = () => {
  const { teachers, deleteTeacher, isLoading } = useTeachers()
  const { openModal, closeModal } = useModal()

  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)

  const handleDelete = async (id: string, imageId: string) => {
    openModal('confirm')
    try {
      await deleteTeacher(id, imageId)
      closeModal()
    } catch (error: any) {
      alert(error)
    }
    /*if (confirm('Ви впевнені, що хочете видалити цього викладача?')) {
      deleteTeacher(id, imageId)
      console.log(imageId)
    }*/

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
              <TeacherCard key={teacher.id} teacher={teacher} openModal={openModal} deleteTeacher={handleDelete} />
            ))}
        </div>
      </div>

      {isModalOpen && modalType === 'confirm' && (
        <ConfirmModal confirmText='Ви впевнені, що хочете видалити цього викладача?' handleClose={closeModal} />
      )}
    </section>
  )
}

export default Teachers
