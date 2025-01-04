/* eslint-disable no-unused-vars */
'use client'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { Teacher } from '@/types/teacher'
import styles from './Tabs.module.css'

interface TabsProps {
  teachers: Teacher[] | undefined
  selectedSpeciality: string
  onSpecialityChange: (speciality: string) => void
}

const Tabs = ({ teachers, selectedSpeciality, onSpecialityChange }: TabsProps) => {
  const t = useTranslations('Speakers')

  const specialities = useMemo(() => {
    if (!teachers) return []

    const uniqueSpecialities = new Set(
      teachers.map((teacher) => teacher.speciality)
    )
    return ['', ...Array.from(uniqueSpecialities)].filter(Boolean)
  }, [teachers])

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.tab} ${selectedSpeciality === '' ? styles.active : ''}`}
        onClick={() => onSpecialityChange('')}
      >
        {t('all')}
      </div>
      
      {specialities.map((speciality) => (
        <div
          key={speciality}
          className={`${styles.tab} ${
            selectedSpeciality === speciality ? styles.active : ''
          }`}
          onClick={() => onSpecialityChange(speciality)}
        >
          {speciality}
        </div>
      ))}
    </div>
  )
}

export default Tabs
