'use client';

import Lottie from 'lottie-react';
import { coursesList } from '@/data/data';
import ArrowRight from '../icons/ArrowRight';
import ArrowTop from '../icons/ArrowTop';
import eyeCourses from '@/animations/eyesCourses.json';
import css from '../courses/Courses.module.css';
import Link from 'next/link';
import { useWidth } from '@/hooks/useWidth';
import { currentComponentsCourse } from '@/utils/currentComponentsCourse';


const Courses = () => {
  const screenWidth = useWidth();
 
  return (
    <section id="courses">
      <div className={`container ${css.courses__container}`}>
        <div className={css.wrapper}>
          <h2 className={`title ${css.titleCourses}`}>Обирай напрямок, який тобі до душі</h2>
          <div className={css.animation}>
          <Lottie className={css.eye} animationData={eyeCourses} />
          </div>
          
        </div>
        <ul className={css.courses}>
          {coursesList.map(({ title, description, component, components, classname, color, href }) => (
            <li className={css.courses__item} key={title}>
              <Link href={href} className={css.courses__link}>
                <div className={css.thumb__title}>
                  <h3 className={` ${css[`title__${classname}`]}`}>{title}</h3>
                  <div className={css.icon__title}>
                    <ArrowTop color={color} width={21} height={22}/>
                  </div>
                </div>

                <p className={css.courses__description}>{description}</p>
                <div className={css.components}>
                  <p className={`${css.components__element} ${css[`components__${classname}`]}`}>
                    {component}
                  </p>
                  <ul className={css.components__list}>
                    {currentComponentsCourse(components, screenWidth).map((item) => (
                      <li key={item} className={css.components__item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className={css.thumb}>
          <h4 className={css.test}>Складно визначитись з курсом?</h4>
          <div className={css.wrapper__test}>
            <p className={css.text}>
              Пройди наш спеціальний тест та дізнайся, які напрямки професійного розвитку
              пасуватимуть саме тобі
            </p>

            <Link href="/" className={css.test__link}>
              <p>Пройти тест</p>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
