import { Controller } from 'react-hook-form'
import { useState } from 'react';
import Admin_TextArea from '@/components/admin/ui/admin_inputs/text_area/Admin_TextArea'
import css from './Question.module.css'
import Admin_TextInput from '@/components/admin/ui/admin_inputs/text_input/Admin_TextInput';
import PlusIcon from '@/components/icons/PlusIcon';

const Question = ({ control, errors }: { control: any; errors: any })=> {
    const [questionList, setThemesList] = useState<Array<number>>([1])
    return (
        <div>
            {questionList.map(item => <div key={item} className={css.thumb}>
    <div className={css.wrapper}>
    <Controller
            name={`faqUa${item}`}
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Часте питання:"
                errorText={item === 1 ?
                    errors.faqUa1?.message && errors.faqUa1?.message : errors.faqUa2?.message && errors.faqUa2?.message}
                placeholder="Які навички необхідні для вступу?"
              />
            )}
          />
           <Controller
            name={`faqEn${item}`}
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Часте питання:"
                errorText={item === 1 ?
                    errors.faqEn1?.message && errors.faqEn1?.message : errors.faqEn2?.message && errors.faqEn2?.message}
                placeholder="Які навички необхідні для вступу?"
              />
            )}
          />
    </div>
    <div className={css.wrapper1}>
    <Controller
            name={`answerUa${item}`}
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Швидка відповідь (max 100 символів)"
                errorText={item === 1 ?
                    errors.answerUa1?.message && errors.answerUa1?.message : errors.answerUa2?.message && errors.answerUa2?.message}
                placeholder="Для вступу необхідно базово знати інтерфейс Adobe After Effects та основи графічного дизайну."
              />
            )}
          />
           <Controller
            name={`answerEn${item}`}
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Швидка відповідь англійською (max 100 символів)"
                errorText={item === 1 ?
                    errors.answerEn1?.message && errors.answerEn1?.message : errors.answerEn2?.message && errors.answerEn2?.message}
                placeholder="To get started, you need a basic knowledge of the Adobe After Effects interface and the basics of graphic design."
              />
            )}
          />
    </div>
</div>)}
<button type="button" className={css.btn} onClick={()=>setThemesList(prev => [...prev, questionList.length + 1])}>
    <PlusIcon color='#2928E3'/>
    <p className={css.btnText}>Додати питання</p>
</button>
</div>
    )
};

export default Question;