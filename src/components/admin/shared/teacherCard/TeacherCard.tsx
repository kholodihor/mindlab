import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './TeacherCard.module.css'
import EditIcon from '../../courses/icons/EditIcon'
import DeleteIcon from '../../courses/icons/DeleteIcon'

type TeacherProps = {
  teacher: {
    id: string
    image: string
    name: string
    speciality: string
  }
  deleteTeacher: (id: number) => void
}

const TeacherCard = ({ teacher, deleteTeacher }: TeacherProps) => {
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
          <button className={`${styles.btn} ${styles.btn_delete}`} onClick={() => deleteTeacher(parseInt(teacher.id))}><DeleteIcon /></button>
          <Link className={`${styles.btn} ${styles.btn_edit}`} href={`/admin/teachers/edit/${parseInt(teacher.id)}`} ><EditIcon /></Link>
        </div>
      </div>
      <Image width={220} height={235} src='/teachers/mask.png' className={styles.mask} alt='mask'/>
    </div>
  )
}

export default TeacherCard