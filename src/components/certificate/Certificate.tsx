'use client'

import { certificateList } from '@/data/certificate'
import css from './Certificate.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ArrowTop from '../icons/ArrowTop'

type Answer = Array<string>

const Certificate = () => {
  const [answer, setAnswer] = useState<Answer>([])

  const currentAnswer = (color: string) => answer.find((item) => item === color)

  const showAnswer = (color: string) => {
    setAnswer((prev) => [...prev, color])
  }

  const closeAnswer = (color: string) => {
    setAnswer((prev) => prev.filter((item) => item !== color))
  }

  return (
    <section className={css.certificate}>
      <div className="container">
        <h2 className={`title ${css.title} `}>cертифікат з унікальним ID</h2>
        <ul className={css.certificate__list}>
          {certificateList.map(({ question, answer, img, color, className }) => (
            <li
              key={question}
              className={css.certificate__item}
              onClick={() => {
                if (currentAnswer(color)) {
                  closeAnswer(color)
                } else {
                  showAnswer(color)
                }
              }}
            >
              <button className={`${css[`question__${className}`]}`} type="button">
                <div className={css.btn}>
                  {' '}
                  <ArrowTop
                    color={currentAnswer(color) ? color : 'currentColor'}
                    width={14}
                    height={16}
                  />
                </div>

                <p style={currentAnswer(color) ? { color: color } : undefined}>{question}</p>
              </button>
              {currentAnswer(color) && (
                <Link href={'/'} className={css.certificate__link}>
                  {answer}
                </Link>
              )}
              {currentAnswer(color) && (
                <div
                  className={`${css.img} ${`${currentAnswer(color)} && ${css.acrive__sertificate}`}`}
                >
                  <Image src={img} alt="certificate" width={360} height={262} />
                </div>
              )}
              <div className={css.img}>
                <Image
                  src={img}
                  alt="certificate"
                  width={360}
                  height={262}
                  className={css.hoverlabe}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certificate
