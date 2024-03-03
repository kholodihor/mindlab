'use client'

import { useState } from 'react'
import css from '../course/Course.module.css'
import { MouseEvent } from 'react'
import { coursesPage, sidebar } from '@/data/courses'
import Image from 'next/image'
import TeacherCourse from './Teachers'
import Audiense from './audience/Audience'
import QuestionCourse from './question/QuestionCourse'
import { useTranslations } from 'next-intl'

const Course = ({ params }: { params: { course: string } }) => {
  const currentCourse = coursesPage.find(({ name }) => name === params.course)
  const [sideBarItem, setSideBarItem] = useState('Теми')

  

  const currentItem = (ev: MouseEvent<HTMLLIElement>) => {
     setSideBarItem(ev.currentTarget.textContent || 'Теми')
    }
const t = useTranslations("Courses")
  return (
    <section className={css.course__container}>
      <ul className={css.sideBar}>
        {sidebar.map((item, index) => <li key={index}
          className={`${css.sideBar__item} ${sideBarItem === item ? css.active__item : ''}`}
          onClick={currentItem}
        >
          {t(item)}
        </li>)}
      </ul>
      <div className={css.topic}>
        {sideBarItem === 'Теми' &&  <><p className={css.topic__decsription}>{t(currentCourse?.text)}</p>
        <p className={css.topic__text}>{t("topicList")}</p>
        <ul className={`${currentCourse?.name === 'political' ? css.topic__list : ''}`}>
          {currentCourse?.topic.map((item) => (
            <li key={item} className={css.topic__item}>
              <Image
                alt="icon"
                src="/svg/course/radix-icons_check.svg"
                width={'20'}
                height={'20'}
              />
              <p>{t(item)}</p>
            </li>
          ))}
        </ul></>}
       
        {sideBarItem === 'Викладачі' && <TeacherCourse /> }
        {sideBarItem === 'Для кого' && <Audiense /> }
        {sideBarItem === 'Питання' && <QuestionCourse /> }
        
      </div>
    </section>
  )
}

export default Course
