import ArrowLeft from '@/components/icons/ArrowLeft'
import React from 'react'
import css from '../[course]/page.module.css'
import AboutCourse from '@/components/courses/coursePage/aboutCourse/AboutCourse'
import Course from '@/components/courses/coursePage/course/Course'
import { coursesPage } from '@/data/courses'

const page = ({ params }: { params: { course: string } }) => {
  const currentCourse = coursesPage.find(({ name }) => name === params.course)

  return (
    <div className={`container ${css.course__container}`}>
      <a href="/#courses" className={css.link}>
        <ArrowLeft />
        <p className={css.link__text}>До інших курсів</p>
      </a>
      {!currentCourse ? (
        <p className={css.error}>Такого курсу не знайдено. Спробуйте знову.</p>
      ) : (
        <>
          <AboutCourse params={params} />
          <Course params={params} />
        </>
      )}
    </div>
  )
}

export default page
