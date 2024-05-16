import React, { useState } from 'react'
import { useCourses } from '@/hooks/swr/useCourses'
import AboutTeacher from '../about_teacher/AboutTeacher'
import TeacherCourses from '../teacher_courses/TeacherCourses'

import styles from './TeacherTabs.module.css'
import { ITeacherResponse } from '@/types/teachers'
import { useTranslations } from 'next-intl'

type ActiveTab = 'courses' | 'about'

type Tab = {
  id: ActiveTab
  name: string
}

const tabs: Tab[] = [
  {
    id: 'about',
    name: 'aboutSpeaker.title'
  },
  {
    id: 'courses',
    name: 'coursesSpeaker.title'
  }
]

const TeacherTabs = ({ teacher }: { teacher: ITeacherResponse }) => {
  const { courses } = useCourses()
  const [activeTab, setActiveTab] = useState<ActiveTab>('courses')
  const t = useTranslations('Speakers')

  const teacherCourses = courses?.find((course) => course.title === teacher.speciality)

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_container}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${tab.id === activeTab && styles.active}`}
            onClick={() => {
              setActiveTab(tab.id)
            }}
          >
            {t(tab.name)}
          </button>
        ))}
      </div>
      {activeTab === 'courses' && teacherCourses && <TeacherCourses data={[teacherCourses]} />}
      {activeTab === 'about' && <AboutTeacher teacher={teacher} />}
    </div>
  )
}

export default TeacherTabs
