import React, { useState } from 'react'
import { useCourses } from '@/hooks/swr/useCourses'
import AboutTeacher from '../about_teacher/AboutTeacher'
import TeacherCourses from '../teacher_courses/TeacherCourses'

import styles from './TeacherTabs.module.css'
import { ITeacherResponse } from '@/types/teachers'

type ActiveTab = 'courses' | 'about'

type Tab = {
  id: ActiveTab
  name: string
}

const tabs: Tab[] = [
  {
    id: 'about',
    name: 'Про викладача'
  },
  {
    id: 'courses',
    name: 'Курси Викладача'
  }
]

const TeacherTabs = ({ teacher }: { teacher: ITeacherResponse }) => {
  const { courses } = useCourses()
  const [activeTab, setActiveTab] = useState<ActiveTab>('courses')

  const teacherCourses = courses?.filter((course) => teacher.courseIds.includes(course.id))

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
            {tab.name}
          </button>
        ))}
      </div>
      {activeTab === 'courses' && <TeacherCourses data={teacherCourses} />}
      {activeTab === 'about' && <AboutTeacher data={teacher} />}
    </div>
  )
}

export default TeacherTabs
