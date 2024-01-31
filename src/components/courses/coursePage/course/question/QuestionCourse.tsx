import { questionCourse } from '@/data/courses';
import css from '../audience/Audience.module.css'
import { useState } from 'react';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';


type Answer = Array<number>

const QuestionCourse = () => {
    const [answer, setAnswer] = useState<Answer>([])

    const currentAnswer = (id: number) => answer.find((item) => item === id)
  
    const showAnswer = (id: number) => {
      setAnswer((prev) => [...prev, id])
    }
  
    const closeAnswer = (id: number) => {
      setAnswer((prev) => prev.filter((item) => item !== id))
    }
    return (
        <div>
<h2 className={css.title}>Часті питання</h2>
<ul className={css.question__list}>
    {questionCourse.map(({question, answer, id}) => <li key={question}>
        <div>
        {currentAnswer(id) ? (
                  <button type="button" className={css.btn} onClick={()=>closeAnswer(id)}>
                    <MinusIcon color={'#aaaedf'} />
                  </button>
                ) : (
                  <button type="button" className={css.btn} onClick={()=>showAnswer(id)}>
                    <PlusIcon color={'#aaaedf'} />
                  </button>
                )}
            <p>{question}</p>
        </div>
        {currentAnswer(id) &&  <p>{answer}</p>}
       
    </li>)}
</ul>
        </div>
    )
};

 export default QuestionCourse;