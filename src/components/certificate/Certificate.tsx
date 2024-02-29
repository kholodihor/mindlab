'use client'

import { certificateList } from '@/data/certificate'
import css from './Certificate.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ArrowTop from '../icons/ArrowTop'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'


const Certificate = () => {
  const [currentAnswer, setCurrentAnswer] = useState('')
  const showAnswer = (color: string) => {
    setCurrentAnswer(color)
  }
const t = useTranslations("Certificate");
  return (
    <section className={`${css.certificate} container`}>
       <motion.div
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
       
      >
        <h2 className={`${css.title} title`}>{t("title")}</h2>
      </motion.div>
        <ul className={css.certificate__list}>
          {certificateList.map(({ question, answer, img, color, className, animationData }) => (
            <li
              key={question}
              className={css.certificate__item}
              onClick={() => {
                if (currentAnswer === color) {
                  setCurrentAnswer('')
                } else {
                  showAnswer(color)
                }
              }}
            >
              <button className={`${css[`question__${className}`]}`} type="button">
                <div className={css.btn}>
                  <ArrowTop
                    color={currentAnswer === color ? color : 'currentColor'}
                    width={14}
                    height={16}
                  />
                </div>
                <p style={currentAnswer === color ? { color: color } : undefined}className={css.question__text}>{t(question)}</p>
              </button>
              {currentAnswer === color && (
                <Link href={'/'} className={css.certificate__link}>
                  {t(answer)}
                </Link>
              )}
              <div
                className={`${css[`img__${className}`]} ${currentAnswer === color ? css[`active__${className}`] : ''}`}
              >
                <Image src={img} alt="certificate" width={240} height={200} className={css.img}/>{' '}
                <div className={css.animation}>
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Certificate;

