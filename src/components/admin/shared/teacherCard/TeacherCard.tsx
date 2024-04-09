import React from 'react'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import EditIcon from '../../courses/icons/EditIcon'
import DeleteIcon from '../../courses/icons/DeleteIcon'

type TeacherProps = {
  teacher: {
    id: number
    image: string
    name: string
    speciality: string
  }
  deleteTeacher: (id: number) => void
  editTeacher: (id: number) => void
}

const TeacherCard = ({ teacher, deleteTeacher, editTeacher }: TeacherProps) => {
  return (
    <div className={styles.card}>
      <Image
        width={220}
        height={235}
        src={teacher.image}
        alt={teacher.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{teacher.name}</h3>
        <p className={styles.speciality}>{teacher.speciality}</p>
        <div className={styles.button_container}>
          <button className={`${styles.btn} ${styles.btn_delete}`} onClick={() => deleteTeacher(teacher.id)}><DeleteIcon /></button>
          <button className={`${styles.btn} ${styles.btn_edit}`} onClick={() => editTeacher(teacher.id)}><EditIcon /></button>
        </div>
      </div>
      <Image width={220} height={235} src='/teachers/mask.png' className={styles.mask} alt='mask'/>
    </div>
  )
}

export default TeacherCard