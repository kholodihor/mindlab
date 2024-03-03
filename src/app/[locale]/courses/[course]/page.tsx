import React from 'react'
import css from '../[course]/page.module.css'
import AboutCourse from '@/components/courses/coursePage/aboutCourse/AboutCourse'
import Course from '@/components/courses/coursePage/course/Course'
import { coursesPage } from '@/data/courses'
import ComeBackLink from '@/components/courses/coursePage/ComeBack'


const page = ({ params }: { params: { course: string } }) => {
  const currentCourse = coursesPage.find(({ name }) => name === params.course)

  return (
    <div className={`container ${css.course__container}`}>
     <ComeBackLink />
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
