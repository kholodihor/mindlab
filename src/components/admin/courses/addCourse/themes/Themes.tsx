'use client'
import { Controller } from 'react-hook-form'
import Admin_TextArea from '@/components/admin/ui/admin_inputs/text_area/Admin_TextArea'
import css from '../AddCourse.module.css'
import styles from './Theme.module.css'
import PlusIcon from '@/components/icons/PlusIcon';
import { useState } from 'react';

const Themes = ({ control, errors, themeList }: { control: any; errors: any, themeList?: Array<string> }) => {
  const [themesList, setThemesList] = useState<Array<string>>(themeList ? themeList : ['1'])
 
  return (
    <div className={css.container2}>
      <div className={styles.thumb}>
        <Controller
          name="themeTitleUa"
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Заголовок до тем курсу (max 500 символів):"
              errorText={
                errors.themeTitleUa?.message && errors.themeTitleUa?.message
              }
              placeholder="Заголовок"
              maxCharQuantity="200"
            />
          )}
        />
         <Controller
          name="themeTitleEn"
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Заголовок до тем курсу англійською (max 500 символів):"
              errorText={
                errors.themeTitleEn?.message && errors.themeTitleEn?.message
              }
              placeholder="Title"
              maxCharQuantity="500"
            />
          )}
        />
      </div>
        <div >
        <h3 className={styles.title}>Теми курсу українською (max 18)</h3>
        <div className={styles.wrapper}>
         
            {themesList.map((item, index) => 
              <Controller
              key={index}
          name={`themesUa${index + 1}`}
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Введіть тему (max 60 символів): "
              errorText={index === 0 ?
                errors.themesUa1?.message && errors.themesUa1?.message : errors.themesUa2?.message && errors.themesUa2?.message}
              placeholder="Що таке політика"
              maxCharQuantity="60"
            />
          )}
        />
            )}
         {themesList.length <= 17 &&  <button type="button" onClick={()=>setThemesList(prev => [...prev, '1' ])} className={styles.btn}><PlusIcon  color='#AAAEDF'/></button>}
        </div>
      </div>
      <div >
        <h3 className={styles.title}>Теми курсу англійською (max 18)</h3>
        <div className={styles.wrapper}>
          {themesList.map((item, index) =>  <Controller
          key={index}
          name={`themesEn${index + 1}`}
          control={control}
          render={({ field }) => (
            <Admin_TextArea
              {...field}
              title="Введіть тему (max 60 символів): "
              errorText={ index === 0 ?
                errors.themesEn1?.message && errors.themesEn1?.message : errors.themesEn2?.message && errors.themesEn2?.messag
              }
              placeholder="What is politics?"
              maxCharQuantity="60"
            />
          )}
        />)}
       {themesList.length <= 17 &&  <button type="button" className={styles.btn}><PlusIcon  color='#AAAEDF'/></button>}
         </div>
      </div>
    </div>
  )
}

export default Themes
