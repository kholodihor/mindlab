'use client'

import css from './Parents.module.css'
import { useState } from 'react'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import Image from 'next/image'
import RotatingStar from '../shared/rotating_star/RotatingStar'
import { iconParents, questionList } from '@/data/parents'
import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'
import Link from 'next/link'
import { motion } from "framer-motion";


import SuccessAlert from '../alerts/success_alert/SuccessAlert'
import { useTranslations } from 'next-intl'

type Answer = Array<string>

const Parents = () => {
  const { openModal } = useModal()
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const alertType = useAlert((state)=>state.alertType)
  const [answer, setAnswer] = useState<Answer>([])
const t = useTranslations()

  const currentAnswer = (color: string) => answer.find((item) => item === color)

  const showAnswer = (color: string) => {
    setAnswer((prev) => [...prev, color])
  }

  const closeAnswer = (color: string) => {
    setAnswer((prev) => prev.filter((item) => item !== color))
  }

  return (
    <section className={`container ${css.parents} `} id="parents">
     
      <motion.h2
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        className={`title ${css.parents__title}`}
      >
     {t("Parents.title")}
      </motion.h2>
      <div className={css.parents__container}>
        <div className={css.thumb}>
         
            <div className={css.wrapper}>
              <p className={css.parents__text}>
               {t("Parents.information")}
              </p>
              <ul className={` ${css.contacts}`}>
                <li className={`${css.contact__item}`}>
                  <p className={css.contact__text}>{t("Footer.help")}</p>
                  <Link href="mailto:mind.lab.hub@gmail.com" className={css.contact__link}>
                    <MailIcon />
                    <p>{t("Footer.mail")}</p>
                  </Link>
                </li>
                <li className={css.contact__item}>
                  <p className={css.contact__text}>{t("Footer.answer")}</p>
                  <Link
                    href="https://t.me/+Q8t3dkMH84hiYmNi"
                    className={css.contact__link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TelegramIcon />
                    <p>{t("Footer.telegram")}</p>
                  </Link>
                </li>
              </ul>
              {iconParents.map(({ src, width, height, className }) => (
                <Image
                  key={className}
                  src={src}
                  width={width}
                  height={height}
                  alt={'svg'}
                  className={`${css[`${className}`]}`}
                />
              ))}
           
          </div>
          <ul className={css.question__list}>
            {questionList.map(({ color, question, answer }) => (
              <li
                key={color}
                onClick={() => {
                  if (currentAnswer(color)) {
                    return closeAnswer(color)
                  }
                  showAnswer(color)
                }}
                className={css.question__item}
              >
                <p
                  className={css.question__text}
                  style={currentAnswer(color) ? { color: color } : undefined}
                >
                  {t(question)}
                </p>
                {currentAnswer(color) && (
                  <div className={css.answer}>
                    {answer.map((item, index) => (
                      <p key={index} className={css.ansver__text}>
                        {t(item)}
                      </p>
                    ))}
                  </div>
                )}
                {currentAnswer(color) ? (
                  <button type="button" className={css.btn} onClick={() => closeAnswer(color)}>
                    <MinusIcon color={color} />
                  </button>
                ) : (
                  <button type="button" className={css.btn} onClick={() => showAnswer(color)}>
                    <PlusIcon color={'#f9f9fa'} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.div  viewport={{ once: true }}
       initial={{ translateX:'-146%', rotate: -360, opacity: 0 }}
       whileInView={{ translateX: '-50%', rotate: 0, opacity:1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 60 }}
        className={css.wrapper__rotatingStar} onClick={() => openModal('feedback')}>
        <RotatingStar />
     </motion.div>
      {isAlertOpen && alertType === 'feedback' &&  <SuccessAlert />}
    </section>
  )
}

export default Parents
