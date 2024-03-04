import { questionCourse } from '@/data/courses';
import css from './QuestionCourse.module.css'
import { useState } from 'react';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { useTranslations } from 'next-intl';


type Answer = Array<number>

const QuestionCourse = () => {
    const [answer, setAnswer] = useState<Answer>([])
const t = useTranslations("Courses")
    const currentAnswer = (id: number) => answer.find((item) => item === id)
  
    const showAnswer = (id: number) => {
      setAnswer((prev) => [...prev, id])
    }
  
    const closeAnswer = (id: number) => {
      setAnswer((prev) => prev.filter((item) => item !== id))
    }
    return (
        <div>
<h2 className={css.title}>{t("question.title")}</h2>
<ul className={css.question__list}>
    {questionCourse.map(({question, answer, id}) => <li key={question} className={css.question__item}>
        <div className={css.wrapper}>
        {currentAnswer(id) ? (
                  <button type="button" className={css.btn} onClick={()=>closeAnswer(id)}>
                    <MinusIcon color={'#aaaedf'} />
                  </button>
                ) : (
                  <button type="button" className={css.btn} onClick={()=>showAnswer(id)}>
                    <PlusIcon color={'#aaaedf'} />
                  </button>
                )}
            <p >{t(question)}</p>
        </div>
        {currentAnswer(id) &&  <p className={css.answer}>{t(answer)}</p>}
       
    </li>)}
</ul>
        </div>
    )
};

 export default QuestionCourse;