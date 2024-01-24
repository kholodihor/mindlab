import ArrowLeft from '@/components/icons/ArrowLeft'
import React from 'react'
import css from '../[course]/page.module.css'
import AboutCourse from '@/components/courses/coursePage/aboutCourse/AboutCourse'
import Course from '@/components/courses/coursePage/course/Course'


const page = ({ params }: { params: { course: string } }) => {
  

  return (
    <div className="container">
      <a href="/#courses" className={css.link}>
        <ArrowLeft />
        <p className={css.link__text}>До інших курсів</p>
      </a>
      <AboutCourse params={params}/>
      <Course />
    </div>
  )
}

export default page
