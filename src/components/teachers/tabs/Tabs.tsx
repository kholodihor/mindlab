'use client'
import styles from './Tabs.module.css'
import { Dispatch, SetStateAction } from 'react'
import { TTeacherResponse } from '@/types/teachers'

interface TabsProps {
  teachers: TTeacherResponse[]
  speciality: string
  query: string
  setSpeciality: Dispatch<SetStateAction<string>>
}

const Tabs = ({ teachers, query, speciality, setSpeciality }: TabsProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.tab} ${speciality === '' && !query && styles.active}`}
        onClick={() => setSpeciality('')}
      >
        Провідні викладачі
      </div>
      {teachers &&
        Array.isArray(teachers) &&
        teachers.map((teacher, index) => (
          <div
            key={index}
            className={`${styles.tab} ${teacher.speciality === speciality && styles.active} ${teacher.speciality?.toLowerCase() === query.toLowerCase() && styles.active}`}
            onClick={() => setSpeciality(teacher.speciality)}
          >
            {teacher.speciality}
          </div>
        ))}
    </div>
  )
}

export default Tabs
