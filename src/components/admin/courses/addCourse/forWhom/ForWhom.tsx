import { Controller } from 'react-hook-form'
import Admin_TextArea from '@/components/admin/ui/admin_inputs/text_area/Admin_TextArea'
import css from './ForWhom.module.css'
import Admin_TextInput from '@/components/admin/ui/admin_inputs/text_input/Admin_TextInput';

const ForWhom = ({ control, errors }: { control: any; errors: any }) => {
  return (
    <div>
        <h3 className={css.title}>Інформація для заповнення українською</h3>
        <div className={css.thumb}>
            <div className={css.wrapper}>
          <Controller
            name="experienceUa"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Досвід:"
                errorText={errors.experienceUa?.message && errors.experienceUa?.message}
                placeholder="Досвід для навчання"
              />
            )}
          />
          </div>
          <div className={css.wrapper}>
          <Controller
            name="languageLevelUa"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="English:"
                errorText={errors.languageLevelUa?.message && errors.languageLevelUa?.message}
                placeholder="Рівень для навчання"
              />
            )}
          />
          </div>
          <div className={css.wrapper}>
          <Controller
            name="timeForLearningUa"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Час для навчання:"
                errorText={errors.timeForLearningUa?.message && errors.timeForLearningUa?.message}
                placeholder="Скільки часу виділяти?"
              />
            )}
          />
          </div>
        </div>
        <div className={css.thumb1}>
        <div className={css.wrapper1}>
        <Controller
            name="forWhomTitleUa1"
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Заголовок (для кого):"
                errorText={errors.forWhomTitleUa1?.message && errors.forWhomTitleUa1?.message}
                placeholder="Заголовок"
              />
            )}
          />
           <Controller
            name="forWhomDescriptionUa1"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Введіть опис (max 120 символів):"
                errorText={errors.forWhomDescriptionUa1?.message && errors.forWhomDescriptionUa1?.message}
                placeholder="Опис"
                maxCharQuantity="120"
              />
            )}
          />
      </div>
      <div className={css.wrapper1}>
        <Controller
            name="forWhomTitleUa2"
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Заголовок (для кого):"
                errorText={errors.forWhomTitleUa2?.message && errors.forWhomTitleUa2?.message}
                placeholder="Заголовок"
              />
            )}
          />
           <Controller
            name="forWhomDescriptionUa2"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Введіть опис (max 120 символів):"
                errorText={errors.forWhomDescriptionUa2?.message && errors.forWhomDescriptionUa2?.message}
                placeholder="Опис"
                maxCharQuantity="120"
              />
            )}
          />
      </div>
      </div>
      <h3 className={css.title}>Інформація для заповнення англійською</h3>
        <div className={css.thumb}>
            <div className={css.wrapper}>
          <Controller
            name="experienceEn"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Досвід англійською:"
                errorText={errors.experienceEn?.message && errors.experienceEn?.message}
                placeholder="Learning experience"
              />
            )}
          />
          </div>
          <div className={css.wrapper}>
          <Controller
            name="languageLevelEn"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="English англійською:"
                errorText={errors.languageLevelEn?.message && errors.languageLevelEn?.message}
                placeholder="Level for learning"
              />
            )}
          />
          </div>
          <div className={css.wrapper}>
          <Controller
            name="timeForLearningEn"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Час для навчання англійською:"
                errorText={errors.timeForLearningEn?.message && errors.timeForLearningEn?.message}
                placeholder="How much time?"
              />
            )}
          />
          </div>
        </div>
        <div className={css.thumb}>
        <div className={css.wrapper1}>
        <Controller
            name="forWhomTitleEn1"
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Заголовок (для кого):"
                errorText={errors.forWhomTitleEn1?.message && errors.forWhomTitleEn1?.message}
                placeholder="Title"
              />
            )}
          />
           <Controller
            name="forWhomDescriptionEn1"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Введіть опис (max 120 символів):"
                errorText={errors.forWhomDescriptionEn1?.message && errors.forWhomDescriptionEn1?.message}
                placeholder="Description"
                maxCharQuantity="120"
              />
            )}
          />
      </div>
      <div className={css.wrapper1}>
        <Controller
            name="forWhomTitleEn2"
            control={control}
            render={({ field }) => (
              <Admin_TextInput
                {...field}
                title="Заголовок (для кого):"
                errorText={errors.forWhomTitleEn2?.message && errors.forWhomTitleEn2?.message}
                placeholder="Title"
              />
            )}
          />
           <Controller
            name="forWhomDescriptionEn2"
            control={control}
            render={({ field }) => (
              <Admin_TextArea
                {...field}
                title="Введіть опис (max 120 символів):"
                errorText={errors.forWhomDescriptionEn2?.message && errors.forWhomDescriptionEn2?.message}
                placeholder="Description"
                maxCharQuantity="120"
              />
            )}
          />
      </div>
      </div>
    </div>
  )
}

export default ForWhom
