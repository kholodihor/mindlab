import { questionCourse } from '@/data/courses';
import css from './QuestionCourse.module.css'
import { useState } from 'react';


type Answer = Array<string>

const QuestionCourse = () => {

    const [answer, setAnswer] = useState<Answer>([])

    const currentAnswer = (color: string) => answer.find((item) => item === color)
  
    const showAnswer = (color: string) => {
      setAnswer((prev) => [...prev, color])
    }
  
    const closeAnswer = (color: string) => {
      setAnswer((prev) => prev.filter((item) => item !== color))
    }
    return (
        <div>
<h2 className={css.title}>Часті питання</h2>
<ul>
    {questionCourse.map(({question, answer}) => <li key={question}>
        <div>
        {/* {currentAnswer(color) ? (
                  <button type="button" className={css.btn} onClick={()=>closeAnswer(color)}>
                    <MinusIcon color={color} />
                  </button>
                ) : (
                  <button type="button" className={css.btn} onClick={()=>showAnswer(color)}>
                    <Image
                      src={'/parents/plus.svg'}
                      alt="plus svg"
                      width={32}
                      height={32}
                      className={css.plusIcon}
                    />
                  </button>
                )} */}
            <p>{question}</p>
        </div>
        <p>{answer}</p>
    </li>)}
</ul>
        </div>
    )
};

 export default QuestionCourse;