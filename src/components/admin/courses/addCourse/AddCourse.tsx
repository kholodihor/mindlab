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
import TabPanel from '../../shared/tabComponent/tabPanel/TabPanel'
import Themes from './themes/Themes'
import Teacher from './teacher/Teacher'
import ForWhom from './forWhom/ForWhom'
import Question from './question/Question'

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
      descriptionUa: '',
      descriptionEn: '',
      tagsUa1: '',
      tagsUa2: '',
      tagsUa3: '',
      tagsUa4: '',
      tagsEn1: '',
      tagsEn2: '',
      tagsEn3: '',
      tagsEn4: '',
      courseDescriptionUa1: '',
      courseDescriptionEn1: '',
      startDateUa: '',
      startDateEn: '',
      priceUa: '',
      priceEn: '',
      numberOfPlacesUa: '',
      numberOfPlacesEn: '',
      themeTitleUa: '',
      themesUa1: '',themesUa2: '',themesUa3: '',themesUa4: '', themesUa5: '', themesUa6: '', themesUa7: '',themesUa8: '',themesUa9: '',
      themesUa10: '',themesUa11: '',themesUa12: '',themesUa13: '',themesUa14: '', themesUa15: '',themesUa16: '',themesUa17: '',themesUa18: '',
      themesEn1: '',themesEn2: '',themesEn3: '',themesEn4: '', themesEn5: '', themesEn6: '', themesEn7: '',themesEn8: '',themesEn9: '',
      themesEn10: '',themesEn11: '',themesEn12: '',themesEn13: '',themesEn14: '', themesEn15: '',themesEn16: '',themesEn17: '',themesEn18: '',
    }
  })
  const colorList = ['#AAAEDF', '#8D83FF', '#2928E3', '#03AA89', '#FED1CE', '#FFECD0']

  const onSubmit: SubmitHandler<z.infer<typeof addCourseValidation>> = async (
    data: z.infer<typeof addCourseValidation>
  ) => {
    console.log(data)
  }
  return (
    <div >
      <PageTitle title="додавання курсу" isAddButtonDisplayed={true} isSettingsButtonDisplayed={true}/>
      <div className={css.container}>
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
          <TabPanel  tabList={[{id: 1, title: "Теми", control: control, errors: errors, Component: Themes}, {id: 2, title: "Викладачі",  control: control, errors: errors, Component: Teacher}, {id: 3, title: "Для кого",  control: control, errors: errors, Component: ForWhom}, {id: 4, title: "Питання",  control: control, errors: errors, Component: Question}]}/>
          </div>
          <button type="submit"> Відправити форму</button>
        </form>
      </div>
    </div>
  )
}
export default AddCourse
