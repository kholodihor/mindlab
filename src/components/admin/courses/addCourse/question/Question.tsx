import { Controller } from 'react-hook-form'
import { useState } from 'react'
import Admin_TextArea from '@/components/admin/ui/admin_inputs/text_area/Admin_TextArea'
import css from './Question.module.css'
import Admin_TextInput from '@/components/admin/ui/admin_inputs/text_input/Admin_TextInput'
import PlusIcon from '@/components/icons/PlusIcon'

const Question = ({
  control,
  errors,
  themeList
}: {
  control: any
  errors: any
  themeList?: Array<any>
}) => {
  const [questionList, setThemesList] = useState<Array<any>>(themeList ? themeList : [1])
  return (
    <div>
      {questionList.map((item, index) => (
        <div key={index} className={css.thumb}>
          <div className={css.wrapper}>
            <Controller
              name={`faqUa${index + 1}`}
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Часте питання:"
                  errorText={
                    index === 0
                      ? errors.faqUa1?.message && errors.faqUa1?.message
                      : errors.faqUa2?.message && errors.faqUa2?.message
                  }
                  placeholder="Які навички необхідні для вступу?"
                />
              )}
            />
            <Controller
              name={`faqEn${index + 1}`}
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Часте питання:"
                  errorText={
                    index === 0
                      ? errors.faqEn1?.message && errors.faqEn1?.message
                      : errors.faqEn2?.message && errors.faqEn2?.message
                  }
                  placeholder="Які навички необхідні для вступу?"
                />
              )}
            />
          </div>
          <div className={css.wrapper1}>
            <Controller
              name={`answerUa${index + 1}`}
              control={control}
              render={({ field }) => (
                <Admin_TextArea
                  {...field}
                  title="Швидка відповідь (max 100 символів)"
                  errorText={
                    index === 0
                      ? errors.answerUa1?.message && errors.answerUa1?.message
                      : errors.answerUa2?.message && errors.answerUa2?.message
                  }
                  placeholder="Для вступу необхідно базово знати інтерфейс Adobe After Effects та основи графічного дизайну."
                  maxCharQuantity="100"
                />
              )}
            />
            <Controller
              name={`answerEn${index + 1}`}
              control={control}
              render={({ field }) => (
                <Admin_TextArea
                  {...field}
                  title="Швидка відповідь англійською (max 100 символів)"
                  errorText={
                    index === 0
                      ? errors.answerEn1?.message && errors.answerEn1?.message
                      : errors.answerEn2?.message && errors.answerEn2?.message
                  }
                  placeholder="To get started, you need a basic knowledge of the Adobe After Effects interface and the basics of graphic design."
                  maxCharQuantity="100"
                />
              )}
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className={css.btn}
        onClick={() => setThemesList((prev) => [...prev, { question: '1' }])}
      >
        <PlusIcon color="#2928E3" />
        <p className={css.btnText}>Додати питання</p>
      </button>
    </div>
  )
}

export default Question
