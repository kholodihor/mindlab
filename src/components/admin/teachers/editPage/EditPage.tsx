'use client'

import React, { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeachersFormValidation, FormFields } from '../TeachersValidationSchema'
import styles from './EditPage.module.css'
import { teachers } from '../teacher'
import PageTitle from '../../shared/pageTitle/PageTitle'
import FileInput from '../../shared/fileInput/FileInput'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea';
import Image from 'next/image'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const EditPage = ({ id }: { id: string }) => {
  
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(TeachersFormValidation ),
    mode: 'onChange',
  });

  const editedTeacher = teachers.find((teacher) => parseInt(teacher.id) === parseInt(id))
  const [image, setImage] = useState('')

  /*useEffect(() => {
    if (!id) return;
    dispatch(fetchById(id));
  }, [id, dispatch])*/

  useEffect(() => {
    if (!editedTeacher) return;

    setValue('name', editedTeacher.name)
    setValue('speciality', editedTeacher.speciality)
    setValue('about', editedTeacher.about)
    setValue('help', editedTeacher.help)
    setValue('linkedinUrl', editedTeacher.linkedinUrl)
    setValue('facebookUrl', editedTeacher.facebookUrl)
    setValue('telegramUrl', editedTeacher.telegramUrl)
    setValue('image', [
      new File([], editedTeacher.image, { type: 'for-url' })
    ])
    setImage(editedTeacher.image)
  }, [editedTeacher, setValue])

  const currentValues = watch()

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  }

  /*useEffect(() => {
    if (!currentValues.image[0]?.size) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])*/

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }
  
  return (
    <section>
      <PageTitle isAddButtonDisplayed={false} isSettingsButtonDisplayed={false} title='редагування викладача' />
      <div className={styles.edit_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.info_container} >
            <div className={styles.input_group}>
              
              <div className={styles.image_preview}>
                <FileInput name="image" control={control} accept="image/*" title="Фото викладача:" placeholder='Завантажити з комп’ютера' />
                <div className={styles.image_preview_box}>
                  <h4 className={styles.image_preview_title}>Прев'ю:</h4>
                  <Image width={280} height={300} src={image ? image : editedTeacher.image} alt={currentValues.name} className={styles.image}/>
                  <Image width={280} height={300} src='/teachers/mask.png' className={styles.mask} alt='mask' />
                </div>
              </div>
              
            </div>
            <div className={styles.input_group}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть ім'я та прізвище:" errorText={errors.name?.message}/>
              )}
            />
            <Controller
              name="speciality"
              control={control}
              render={({ field }) => (
                <Admin_TextArea {...field} title="Спеціалізація (max 52 символи)" errorText={errors.speciality?.message}/>
              )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="linkedinUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на LinkedIn викладача:" errorText={errors.linkedinUrl?.message} />
              )}
            />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="facebookUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на Facebook викладача:" errorText={errors.facebookUrl?.message} />
              )}
            />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="telegramUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на Telegram викладача:" errorText={errors.telegramUrl?.message} />
              )}
            />
            </div>
          </div>
          <div className={styles.about_container}>
            <h4 className={styles.subtitle}>Про викладача</h4>
            <div className={styles.about_input}>
              <div className={`${styles.input_group} ${styles.area_group}`}>
              <Controller
                name="about"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea {...field} title='Про викладача (max 140 символів):' errorText={errors.about?.message}/>
                )}
              />
              </div>
              <div className={`${styles.input_group} ${styles.area_group}`}>
              <Controller
                name="help"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea {...field} title='З чим може допомогти викладач? (max 140 символів):' errorText={errors.help?.message}/>
                )}
              />
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <ResetButton text='Скасувати' />
            <SubmitButton text='Застосувати зміни' handleSubmit={() => {}} />
          </div>
        </form>
      </div>
    </section>
  )
  
}

export default EditPage
