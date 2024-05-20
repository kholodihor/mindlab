'use client'

import { useState } from 'react'
import css from '../course/Course.module.css'
import { sidebar } from '@/data/courses'
import Image from 'next/image'
import TeacherCourse from './Teachers'
import Audiense from './audience/Audience'
import QuestionCourse from './question/QuestionCourse'
import { useLocale, useTranslations } from 'next-intl'
import { useCourses } from '@/hooks/swr/useCourses'

const Course = ({ params }: { params: { course: string } }) => {
  const {getCourseById} = useCourses()
  const currentCourse = getCourseById(params.course)
  const [sideBarItem, setSideBarItem] = useState(0)
  const locale = useLocale()


  const currentItem = (index: number) => {
     setSideBarItem(index || 0)
    }
const t = useTranslations("Courses")
  return (
    <section className={css.course__container}>
      <ul className={css.sideBar}>
        {sidebar.map((item, index) => <li key={index}
          className={`${css.sideBar__item} ${sideBarItem === index ? css.active__item : ''}`}
          onClick={()=>{currentItem(index)}}
        >
          {t(item)}
        </li>)}
      </ul>
      <div className={css.topic}>
        {sideBarItem === 0 &&  <><p className={css.topic__decsription}>{locale === 'ua' ? currentCourse?.themeTitleUa : currentCourse?.themeTitleEn}</p>
        <p className={css.topic__text}>{t("topicList")}</p>
        <ul className={`${currentCourse?.themesEn.length > 10 ? css.topic__list : ''}`}>
          {locale === 'ua' ? currentCourse?.themesUa.map((item) => (
            <li key={item} className={css.topic__item}>
              <Image
                alt="icon"
                src="/svg/course/radix-icons_check.svg"
                width={'20'}
                height={'20'}
              />
              <p>{item}</p>
            </li>
          )) : currentCourse?.themesEn.map((item) => (
            <li key={item} className={css.topic__item}>
              <Image
                alt="icon"
                src="/svg/course/radix-icons_check.svg"
                width={'20'}
                height={'20'}
              />
              <p>{item}</p>
            </li>
          ))}
        </ul></>}
       
        {sideBarItem === 1 && <TeacherCourse course={currentCourse.title}/> }
        {sideBarItem === 2 && <Audiense currentCourse={currentCourse}/> }
        {sideBarItem === 3 && <QuestionCourse currentCourse={currentCourse}/> }
        
      </div>
    </section>
  )
}

export default Course