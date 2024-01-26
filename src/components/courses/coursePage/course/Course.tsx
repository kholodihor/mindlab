'use client'

import { useState } from 'react'
import css from '../course/Course.module.css'
import { MouseEvent } from 'react'
import { coursesPage } from '@/data/courses'
import Image from 'next/image'

const Course = ({ params }: { params: { course: string } }) => {
  const currentCourse = coursesPage.find(({ name }) => name === params.course)
  const [sideBarItem, setSideBarItem] = useState('Теми')

  const currentItem = (ev: MouseEvent<HTMLLIElement>) => {
    setSideBarItem(ev.currentTarget.textContent || 'Теми')
  }

  return (
    <section className={css.course__container}>
      <ul className={css.sideBar}>
        <li
          className={`${css.sideBar__item} ${sideBarItem === 'Теми' ? css.active__item : ''}`}
          onClick={currentItem}
        >
          Теми
        </li>
        <li
          className={`${css.sideBar__item} ${sideBarItem === 'Викладачі' ? css.active__item : ''}`}
          onClick={currentItem}
        >
          Викладачі
        </li>
        <li
          className={`${css.sideBar__item} ${sideBarItem === 'Для кого' ? css.active__item : ''}`}
          onClick={currentItem}
        >
          Для кого
        </li>
        <li
          className={`${css.sideBar__item} ${sideBarItem === 'Питання' ? css.active__item : ''}`}
          onClick={currentItem}
        >
          Питання
        </li>
      </ul>
      <div className={css.topic}>
        <p className={css.topic__decsription}>{currentCourse?.text}</p>
        <p className={css.topic__text}>Лови теми, які будуть в цьому курсі:</p>
        <ul className={`${currentCourse?.name === 'political' ? css.topic__list : ''}`}>
          {currentCourse?.topic.map((item) => (
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
        </ul>
      </div>
    </section>
  )
}

export default Course
