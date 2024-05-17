'use client'

import { useState } from 'react'
import css from '../course/Course.module.css'
import { coursesPage, sidebar } from '@/data/courses'
import Image from 'next/image'
import TeacherCourse from './Teachers'
import Audiense from './audience/Audience'
import QuestionCourse from './question/QuestionCourse'
import { useTranslations } from 'next-intl'

const Course = ({ params }: { params: { course: string } }) => {
  const currentCourse = coursesPage.find(({ name }) => name === params.course)
  const [sideBarItem, setSideBarItem] = useState(0)

  

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
        {sideBarItem === 0 &&  <><p className={css.topic__decsription}>{t(currentCourse?.text)}</p>
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
       
        {sideBarItem === 1 && <TeacherCourse course={currentCourse.title}/> }
        {sideBarItem === 2 && <Audiense /> }
        {sideBarItem === 3 && <QuestionCourse /> }
        
      </div>
    </section>
  )
}

export default Course

// const [isHovered, setIsHovered] = useState('');

// const handleMouseEnter = (color: string) => {
//   setIsHovered(color);
// };

// const handleMouseLeave = () => {
//   setIsHovered('');
// };

// <ul className={css.courses}>
//         {courses?.map(
//           ({ title, descriptionUa, descriptionEn, tagsUa, tagsEn, color, id }) => (
//             <li className={css.courses__item} key={id}>
//               <Link href={`/${locale}${id}`} className={css.courses__link} onMouseEnter={()=>handleMouseEnter(color)}
//       onMouseLeave={handleMouseLeave}>
//                 <div className={css.thumb__title} >
//                   <h3 className={css.title} style={{color: isHovered === color ? color : ''}} >{title}</h3>
//                   <div className={css.icon__title}>
//                     <ArrowTop color={color} width={21} height={22} />
//                   </div>
//                 </div>
//                 <p className={css.courses__description}>{locale === 'ua' ? descriptionUa : descriptionEn}</p>
//                   <ul className={css.components__list}>
//                     {locale === 'ua' ? tagsUa : tagsEn.map((item, index) => (
//                       <li key={index} className={css.components__item} style={isHovered === color && index === 0 ? {backgroundColor: color, color: '#09090A', border: 'none'} : {backgroundColor: '', color: ''}}>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>