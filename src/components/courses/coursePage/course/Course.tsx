'use client';

import { useState } from 'react'
import css from '../course/Course.module.css'
import { MouseEvent } from 'react';

const Course = () => {
  const [sideBarItem, setSideBarItem] = useState('Теми');

  const currentItem = (ev: MouseEvent<HTMLLIElement>) => {
setSideBarItem(ev.currentTarget.textContent || "Теми")
  }

  return (
    <section>
        <ul className={css.sideBar}>
          <li className={`${css.sideBar__item} ${sideBarItem === "Теми" ? css.active__item : ''}`} onClick={currentItem}>Теми</li>
          <li className={`${css.sideBar__item} ${sideBarItem === "Викладачі" ? css.active__item : ''}`} onClick={currentItem}>Викладачі</li>
          <li className={`${css.sideBar__item} ${sideBarItem === "Для кого" ? css.active__item : ''}`} onClick={currentItem}>Для кого</li>
          <li className={`${css.sideBar__item} ${sideBarItem === "Питання" ? css.active__item : ''}`} onClick={currentItem}>Питання</li>
        </ul>
        <div>
            
        </div>
    </section>
  )
};

export default Course;
