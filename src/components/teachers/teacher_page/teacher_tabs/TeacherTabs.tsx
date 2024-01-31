import React, { useState } from 'react'
import { aboutData, coursesData } from '@/data/teacherPage'
import AboutTeacher from '../about_teacher/AboutTeacher'
import TeacherCourses from '../teacher_courses/TeacherCourses'

import styles from './TeacherTabs.module.css'

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

const TeacherTabs = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('courses')

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
      {activeTab === 'courses' && <TeacherCourses data={coursesData} />}
      {activeTab === 'about' && <AboutTeacher data={aboutData} />}
    </div>
  )
}

export default TeacherTabs
