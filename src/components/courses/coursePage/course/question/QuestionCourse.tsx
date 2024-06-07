import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ICourseResponse } from '@/types/courses'
import MinusIcon from '@/components/icons/MinusIcon'
import PlusIcon from '@/components/icons/PlusIcon'
import css from './QuestionCourse.module.css'

type Answer = Array<number>
const QuestionCourse = ({ currentCourse }: { currentCourse: ICourseResponse }) => {
  const locale = useLocale()
  const [answer, setAnswer] = useState<Answer>([])
  const t = useTranslations('Courses')
  const currentAnswer = (id: number) => answer.find((item) => item === id)

  const showAnswer = (id: number) => {
    setAnswer((prev) => [...prev, id])
  }

  const closeAnswer = (id: number) => {
    setAnswer((prev) => prev.filter((item) => item !== id))
  }
  return (
    <div>
      <h2 className={css.title}>{t('question.title')}</h2>
      <ul className={css.question__list}>
        {locale === 'ua'
          ? currentCourse.faqUa.map(({ questionUa, answerUa }, index) => (
              <li key={index} className={css.question__item}>
                <div className={css.wrapper}>
                  {currentAnswer(index) ? (
                    <button type="button" className={css.btn} onClick={() => closeAnswer(index)}>
                      <MinusIcon color={'#aaaedf'} />
                    </button>
                  ) : (
                    <button type="button" className={css.btn} onClick={() => showAnswer(index)}>
                      <PlusIcon color={'#aaaedf'} />
                    </button>
                  )}
                  <p>{questionUa}</p>
                </div>
                {currentAnswer(index) && <p className={css.answer}>{answerUa}</p>}
              </li>
            ))
          : currentCourse.faqEn.map(({ questionEn, answerEn }, index) => (
              <li key={index} className={css.question__item}>
                <div className={css.wrapper}>
                  {currentAnswer(index) ? (
                    <button type="button" className={css.btn} onClick={() => closeAnswer(index)}>
                      <MinusIcon color={'#aaaedf'} />
                    </button>
                  ) : (
                    <button type="button" className={css.btn} onClick={() => showAnswer(index)}>
                      <PlusIcon color={'#aaaedf'} />
                    </button>
                  )}
                  <p>{questionEn}</p>
                </div>
                {currentAnswer(index) && <p className={css.answer}>{answerEn}</p>}
              </li>
            ))}
      </ul>
    </div>
  )
}

export default QuestionCourse
