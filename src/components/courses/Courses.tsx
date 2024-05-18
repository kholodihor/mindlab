'use client'

import Lottie from 'lottie-react'
import ArrowRight from '../icons/ArrowRight'
import ArrowTop from '../icons/ArrowTop'
import eyeCourses from '@/animations/eyesCourses.json'
import css from '../courses/Courses.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useCourses } from '@/hooks/swr/useCourses'

const Courses = () => {
  const { courses } = useCourses()
  const t = useTranslations('Courses')
  const locale = useLocale()

  const [isHovered, setIsHovered] = useState('')

  const handleMouseEnter = (color: string) => {
    setIsHovered(color)
  }

  const handleMouseLeave = () => {
    setIsHovered('')
  }

  return (
    <section id="courses" className={`container ${css.courses__container}`}>
      <div className={css.wrapper} id="course">
        <motion.h2
          viewport={{ once: true }}
          initial={{ translateY: 150, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.75 }}
          className={`title ${css.titleCourses}`}
        >
          {t('title')}
        </motion.h2>

        <div className={css.animation}>
          <Lottie className={css.eye} animationData={eyeCourses} />
        </div>
      </div>
      <ul className={css.courses}>
        {courses?.map(({ title, descriptionUa, descriptionEn, tagsUa, tagsEn, color, id }) => (
          <li className={css.courses__item} key={id}>
            <Link
              href={`${locale}/courses/${id}`}
              className={css.courses__link}
              onMouseEnter={() => handleMouseEnter(color)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={css.thumb__title}>
                <h3 className={css.title} style={{ color: isHovered === color ? color : '' }}>
                  {title}
                </h3>
                <div className={css.icon__title}>
                  <ArrowTop color={color} width={21} height={22} />
                </div>
              </div>
              <p className={css.courses__description}>
                {locale === 'ua' ? descriptionUa : descriptionEn}
              </p>
              <ul className={css.components__list}>
                {' '}
                {locale === 'ua'
                  ? tagsUa.map((item, index) => (
                      <li
                        key={index}
                        className={css.components__item}
                        style={
                          isHovered === color && index === 0
                            ? { backgroundColor: color, color: '#09090A', border: 'none' }
                            : { backgroundColor: '', color: '' }
                        }
                      >{item}</li>
                    ))
                  : tagsEn.map((item, index) => (
                      <li
                        key={index}
                        className={css.components__item}
                        style={
                          isHovered === color && index === 0
                            ? { backgroundColor: color, color: '#09090A', border: 'none' }
                            : { backgroundColor: '', color: '' }
                        }
                      >{item}</li>
                    ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
      <div className={css.thumb}>
        <h4 className={css.test}>{t('profTest.question')}</h4>
        <div className={css.wrapper__test}>
          <p className={css.text}>{t('profTest.answer')}</p>
          <Link
            href="https://www.16personalities.com/free-personality-test"
            rel="noopener noreferrer"
            target="_blank"
            className={css.test__link}
          >
            <p>{t('profTest.test')}</p>
            <ArrowRight />
          </Link>
        </div>
        <Image
          src="/parents/linelcon-3.svg"
          width={124}
          height={74}
          alt={'svg'}
          className={css.icon__line1}
        />
        <Image
          src="/parents/lineIcon-1.svg"
          width={50}
          height={70}
          alt={'svg'}
          className={css.icon__line2}
        />
        <Image
          src="/parents/starIcon.svg"
          width={19}
          height={19}
          alt={'svg'}
          className={css.icon__star1}
        />
        <Image
          src="/parents/starIcon.svg"
          width={26}
          height={26}
          alt={'svg'}
          className={css.icon__star2}
        />
        <Image
          src="/parents/starIcon.svg"
          width={19}
          height={19}
          alt={'svg'}
          className={css.icon__star3}
        />
      </div>
    </section>
  )
}

export default Courses
