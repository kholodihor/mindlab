'use client'

import css from './Parents.module.css'
import { useState } from 'react'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import style from '../footer/Footer.module.css'
import Image from 'next/image'
import RotatingStar from '../shared/rotating_star/RotatingStar'
import { iconParents, questionList } from '@/data/parents'
import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useWidth } from '@/hooks/useWidth'

import SuccessAlert from '../alerts/success_alert/SuccessAlert'

type Answer = Array<string>

const Parents = () => {
  const { openModal } = useModal()
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const [answer, setAnswer] = useState<Answer>([])
  const  currentWidth = useWidth()

  const currentAnswer = (color: string) => answer.find((item) => item === color)

  const showAnswer = (color: string) => {
    setAnswer((prev) => [...prev, color])
  }

  const closeAnswer = (color: string) => {
    setAnswer((prev) => prev.filter((item) => item !== color))
  }

  return (
    <section className={css.parents} id="parents">
      <div className="container">
      <motion.h2
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        className={`title ${css.parents__title}`}
      >
     Інформація для батьків
      </motion.h2>
       
        <div className={css.thumb}>
          <div>
            <div className={css.wrapper}>
              <p className={css.parents__text}>
                Шановні батьки, якщо у Вас виникли запитання щодо курсів, платформи, діяльності
                MindLab пішіть нам в чат або на пошту.
              </p>
              <ul className={` ${css.contacts}`}>
                <li className={`${css.contact__item}`}>
                  <p className={css.contact__text}>Ми допоможемо:</p>
                  <Link href="mailto:mind.lab.hub@gmail.com" className={style.contact__link}>
                    <MailIcon />
                    <p>пошта</p>
                  </Link>
                </li>
                <li className={css.contact__item}>
                  <p className={css.contact__text}>Ми відповімо:</p>
                  <Link
                    href="https://t.me/+Q8t3dkMH84hiYmNi"
                    className={style.contact__link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TelegramIcon />
                    <p>телеграм</p>
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
            <div className={css.wrapper__rotatingStar} onClick={() => openModal('feedback')}>
              <RotatingStar />
            </div>
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
                  {question}
                </p>
                {currentAnswer(color) && (
                  <div className={css.answer}>
                    {answer.map((item, index) => (
                      <p key={index} className={css.ansver__text}>
                        {item}
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
       initial={{ translateX:'-96%', rotate: -360, opacity: 0 }}
       whileInView={{ translateX: currentWidth >= 768 ? '5%' : '-50%', rotate: 0, opacity:1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 60 }}
        className={css.wrapper__rotatingStar} >
        <RotatingStar />
     </motion.div>
      {isAlertOpen && <SuccessAlert />}
    </section>
  )
}

export default Parents
