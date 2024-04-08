'use client'
import PageTitle from '../../shared/pageTitle/PageTitle'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { addCourseValidation } from './validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import css from './AddCourse.module.css'
import ColorInput from '../../shared/colorInput/ColorInput'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'

const AddCourse = () => {
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors }
  } = useForm<z.infer<typeof addCourseValidation>>({
    resolver: zodResolver(addCourseValidation),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: '',
      description: '',
      descriptionEn: '',
      tagsUa1: '',
      tagsUa2: '',
      tagsUa3: '',
      tagsUa4: '',
      tagsEn1: '',
      tagsEn2: '',
      tagsEn3: '',
      tagsEn4: '',
    }
  })
  const colorList = ['#AAAEDF', '#8D83FF', '#2928E3', '#03AA89', '#FED1CE', '#FFECD0']

  const onSubmit: SubmitHandler<z.infer<typeof addCourseValidation>> = async (
    data: z.infer<typeof addCourseValidation>
  ) => {
    console.log(data)
  }
  return (
    <div>
      <PageTitle title="додавання курсу" />
      <div className={css.container} >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h3 className={css.title}>Інформація для головної сторінки</h3>
          <div className={css.container1}>
            <div className={css.leftPart}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть назву курсу:"
                    errorText={errors.title?.message && errors.title?.message}
                    placeholder="Назва"
                  />
                )}
              />
              <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <ColorInput
                    {...field}
                    title="Оберіть колір:"
                    colorList={colorList}
                    errorText={errors.color?.message && errors.color?.message}
                  />
                )}
              />
            </div>
            <div className={css.rightPart}>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть опис (max 300 символів):"
                    errorText={errors.description?.message && errors.description?.message}
                    placeholder="Опис"
                    className={css.textarea}
                  />
                )}
              />
               <Controller
                name="descriptionEn"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть опис англійською (max 300 символів):"
                    errorText={errors.descriptionEn?.message && errors.descriptionEn?.message}
                    placeholder="Опис"
                  />
                )}
              />
            </div>
          </div>
          <div >
            <h3 className={css.title}>Теги до курсу українською</h3>
            <div className={css.container2}>
          <Controller
                name="tagsUa1"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу (max 24 символів):"
                    errorText={errors.tagsUa1?.message && errors.tagsUa1?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsUa2"
                control={control}
                render={({ field }) => ( <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу (max 24 символів):"
                    errorText={errors.tagsUa2?.message && errors.tagsUa2?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsUa3"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу (max 24 символів):"
                    errorText={errors.tagsUa3?.message && errors.tagsUa3?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsUa4"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу (max 24 символів):"
                    errorText={errors.tagsUa4?.message && errors.tagsUa4?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                </div>
          </div>
          <div >
            <h3 className={css.title}>Теги до курсу англійською</h3>
            <div className={css.container2}>
          <Controller
                name="tagsEn1"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу англійською (max 24 символів):"
                    errorText={errors.tagsEn1?.message && errors.tagsEn1?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsEn2"
                control={control}
                render={({ field }) => ( <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу англійською (max 24 символів):"
                    errorText={errors.tagsEn2?.message && errors.tagsEn2?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsEn3"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу англійською (max 24 символів):"
                    errorText={errors.tagsEn3?.message && errors.tagsEn3?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                  <Controller
                name="tagsEn4"
                control={control}
                render={({ field }) => (
                  <div className={css.flex__element}>
                  <Admin_TextInput
                    {...field}
                    title="Тег курсу англійською (max 24 символів):"
                    errorText={errors.tagsEn4?.message && errors.tagsEn4?.message}
                    placeholder="#"
                  />
                </div>
                )}
                />
                </div>
          </div>
          <button type="submit"> Відправити форму</button>
        </form>
      </div>
    </div>
  )
}

export default AddCourse
