'use client'

import PageTitle from '../../shared/pageTitle/PageTitle'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import css from '../addCourse/AddCourse.module.css'
import ColorInput from '../../shared/colorInput/ColorInput'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import TabPanel from '../../shared/tabComponent/tabPanel/TabPanel'
import Themes from '../addCourse/themes/Themes'
import Teacher from '../addCourse/teacher/Teacher'
import ForWhom from '../addCourse/forWhom/ForWhom'
import Question from '../addCourse/question/Question'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import { coursesList } from '@/data/data'
import { useEffect } from 'react'
import { editCourseValidation } from './validationShema'
import { defaultValue, defaultdata } from './defaultValues'


const EditCourse = ({ id }: { id: string }) => {
    const currentCourse = coursesList.find(item => item.id === id);
     useEffect(()=>{
        console.log(id)
        console.log(currentCourse, 'currentCourse')
     }, [currentCourse, id])
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors }
  } = useForm<z.infer<typeof editCourseValidation>>({
    resolver: zodResolver(editCourseValidation),
    mode: 'onChange',
    values: defaultValue(defaultdata)
  })

  const colorList = ['#AAAEDF', '#8D83FF', '#2928E3', '#03AA89', '#FED1CE', '#FFECD0']

  const onSubmit: SubmitHandler<z.infer<typeof editCourseValidation>> = async (
    data: z.infer<typeof editCourseValidation>
  ) => {
    console.log(data)
  }
  return (
    <div >
      <PageTitle title="редагування курсу" isAddButtonDisplayed={false} isSettingsButtonDisplayed={false}/>
      <div className={css.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                name="descriptionUa"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть опис (max 300 символів):"
                    errorText={errors.descriptionUa?.message && errors.descriptionUa?.message}
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
              render={({ field }) => (
                <div className={css.flex__element}>
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
              render={({ field }) => (
                <div className={css.flex__element}>
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
          <h3 className={css.title}>Сторінка курсу українською</h3>
          <div className={css.container2}>
            <div className={`${css.flex__element} ${css.wrapper__description}`}>
              <Controller
                name="courseDescriptionUa1"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть опис англійською (max 300 символів):"
                    errorText={errors.courseDescriptionUa1?.message && errors.courseDescriptionUa1?.message}
                    placeholder="Опис"
                  />
                )}
              />
            </div>
            <div className={css.container3}>
              <div className={`${css.flex__element} ${css.wrapper__date} ${css.wrapper__price}`}>
                <Controller
                name="startDateUa"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Дата початку курсу:' placeholder='23 березня 2024' errorText={errors.startDateUa?.message && errors.startDateUa?.message} />}
                />
                <Controller
                name="courseDurationUa"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Тривалість курсу:' placeholder='2 місяці' errorText={errors.courseDurationUa?.message && errors.courseDurationUa?.message} />}
                />
              </div>
              <div className={`${css.flex__element} ${css.wrapper__price}`}>
                <Controller
                name="numberOfPlacesUa"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='К-ть місць на курсі:' placeholder='15 місць' errorText={errors.numberOfPlacesUa?.message && errors.numberOfPlacesUa?.message} />}
                />
              </div>
            </div>
            <div className={`${css.flex__element} ${css.wrapper__price}`}>
              <Controller
                name="priceUa"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Вартість курсу:' placeholder='700 грн/міс.' errorText={errors.priceUa?.message && errors.priceUa?.message} />}
                />
                <Controller
                name="fullpriceUa"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Повна вартість курсу:' placeholder='1200 грн' errorText={errors.fullpriceUa?.message && errors.fullpriceUa?.message} />}
                />
              </div>
          </div>
          <div >
            <h3 className={css.title}>Сторінка курсу англійською</h3>
            <div className={css.container2}>
            <div className={`${css.flex__element} ${css.wrapper__description}`}>
              <Controller
                name="courseDescriptionEn1"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть опис англійською (max 300 символів):"
                    errorText={errors.courseDescriptionEn1?.message && errors.courseDescriptionEn1?.message}
                    placeholder="Description"
                  />
                )}
              />
            </div>
            <div className={css.container3}>
              <div className={`${css.flex__element} ${css.wrapper__date} ${css.wrapper__price}`}>
                <Controller
                name="startDateEn"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Дата початку курсу:' placeholder='23 March 2024' errorText={errors.startDateEn?.message && errors.startDateEn?.message} />}
                />
              </div>
              <div className={`${css.flex__element} ${css.wrapper__price}`}>
                <Controller
                name="numberOfPlacesEn"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='К-ть місць на курсі:' placeholder='15 places' errorText={errors.numberOfPlacesEn?.message && errors.numberOfPlacesEn?.message} />}
                />
              </div>
            </div>
            <div className={`${css.flex__element} ${css.wrapper__price}`}>
              <Controller
                name="priceEn"
                control={control}
                render={({field})=> <Admin_TextInput {...field} title='Вартість курсу:' placeholder='UAH 700/month' errorText={errors.priceEn?.message && errors.priceEn?.message} />}
                />
              </div>
          </div>
          <TabPanel  tabList={[{id: 1, title: "Теми", control: control, errors: errors, themeList: [1, 2, 3, 4], Component: Themes}, {id: 2, title: "Викладачі",  control: control, errors: errors, Component: Teacher}, {id: 3, title: "Для кого",  control: control, errors: errors, Component: ForWhom}, {id: 4, title: "Питання",  control: control, errors: errors, themeList: [1, 2 ], Component: Question}]}/>
          </div>
          <div className={css.btt__form}>
            <ResetButton text='Скасувати' />
            <SubmitButton text='Додати курс' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default EditCourse;