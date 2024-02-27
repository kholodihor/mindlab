'use client'
import styles from './Tabs.module.css'
import { Dispatch, SetStateAction } from 'react'
import { ITeacherResponse } from '@/types/teachers'

interface TabsProps {
  teachers: ITeacherResponse[]
  speciality: string
  query: string
  setSpeciality: Dispatch<SetStateAction<string>>
}

const Tabs = ({ teachers, query, speciality, setSpeciality }: TabsProps) => {
  const specialities = Array.from(new Set(teachers?.map((teacher) => teacher.speciality)))

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.tab} ${speciality === '' && !query && styles.active}`}
        onClick={() => setSpeciality('')}
      >
        Провідні викладачі
      </div>
      {specialities &&
        Array.isArray(specialities) &&
        specialities.map((item, index) => (
          <div
            key={index}
            className={`${styles.tab} ${item === speciality && styles.active} ${item?.toLowerCase() === query.toLowerCase() && styles.active}`}
            onClick={() => setSpeciality(item)}
          >
            {item}
          </div>
        ))}
    </div>
  )
}

export default Tabs
