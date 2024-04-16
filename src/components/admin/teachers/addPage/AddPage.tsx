'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { zodResolver } from '@hookform/resolvers/zod'
import { TeachersFormValidation, FormFields } from '../TeachersValidationSchema'
import styles from './AddPage.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import FileInput from '../../shared/fileInput/FileInput'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea';
import Image from 'next/image'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import PreviewIcon from './icons/PreviewIcon'

const AddPage = () => {
  const router = useRouter()
  const [image, setImage] = useState('')

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(TeachersFormValidation ),
    mode: 'onChange',
  })

  const currentValues = watch()

  /*const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  };

  useEffect(() => {
    if (!currentValues.image?.length) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])*/

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
    router.back()
  }

  return (
    <section>
      <PageTitle title='Додавання викладача' isAddButtonDisplayed={false} isSettingsButtonDisplayed={false} />
      <div className={styles.add_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.info_container} >
            <div className={styles.input_group}>
              <div className={styles.image_preview}>
                <FileInput name="image" control={control} accept="image/*" title="Фото викладача:" placeholder='Завантажити з комп’ютера' />
                <div className={styles.image_preview_box}>
                  <h4 className={styles.image_preview_title}>Прев'ю:</h4>
                  {
                    image
                    ?
                    <>
                      <Image width={280} height={300} src={image} alt={currentValues.name} className={styles.image}/>
                      <Image width={280} height={300} src='/teachers/mask.png' className={styles.mask} alt='mask' />
                    </>
                    :
                    <div className={styles.placeholder}><PreviewIcon/></div>
                  }
                </div>
              </div>
            </div>
            <div className={styles.input_group}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть ім'я та прізвище:" errorText={errors.name?.message} placeholder='Марко Федоренко'/>
              )}
            />
            <Controller
              name="speciality"
              control={control}
              render={({ field }) => (
                <Admin_TextArea {...field} title="Спеціалізація (max 52 символи)" errorText={errors.speciality?.message} placeholder='Політичний радник...' />
              )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="linkedinUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на LinkedIn викладача:" errorText={errors.linkedinUrl?.message} placeholder='Посилання на LinkedIn' />
              )}
            />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="facebookUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на Facebook викладача:" errorText={errors.facebookUrl?.message} placeholder='Посилання на Facebook' />
              )}
            />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
            <Controller
              name="telegramUrl"
              control={control}
              render={({ field }) => (
                <Admin_TextInput {...field} title="Введіть посилання на Telegram викладача:" errorText={errors.telegramUrl?.message} placeholder='Посилання на Telegram' />
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
                  <Admin_TextArea {...field} title='Про викладача (max 140 символів):' errorText={errors.about?.message} placeholder='Опис' />
                )}
              />
              </div>
              <div className={`${styles.input_group} ${styles.area_group}`}>
              <Controller
                name="help"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea {...field} title='З чим може допомогти викладач? (max 140 символів):' errorText={errors.help?.message} placeholder='Опис' />
                )}
              />
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <ResetButton text='Скасувати' />
            <SubmitButton text='Додати викладача' handleSubmit={() => {}} disabled={!isDirty || !isValid} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddPage
