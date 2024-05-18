'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormFields, TeachersFormValidation } from '../TeachersValidationSchema'
import styles from './AddPage.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import FileInput from '../../shared/fileInput/FileInput'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Image from 'next/image'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import PreviewIcon from './icons/PreviewIcon'
import { defaultValues } from '../defaultValues'
import { useTeachers } from '@/hooks/swr/useTeachers'

const AddPage = () => {
  const router = useRouter()
  const [image, setImage] = useState('')
  const { addTeacher } = useTeachers()
  const [isProcessing, setIsProcessing] = useState(false)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(TeachersFormValidation),
    defaultValues: defaultValues,
    mode: 'onChange'
  })

  const currentValues = watch()

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  }

  useEffect(() => {
    if (!currentValues.image?.length) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsProcessing(true)
    await addTeacher(data)
    setIsProcessing(false)
    router.back()
  }

  return (
    <section>
      <PageTitle
        title="Додавання викладача"
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
      />
      <div className={styles.add_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.info_container}>
            <div className={styles.input_group}>
              <div className={styles.image_preview}>
                <FileInput
                  name="image"
                  control={control}
                  accept="image/*"
                  title="Фото викладача:"
                  placeholder="Завантажити з комп’ютера"
                />
                <div className={styles.image_preview_box}>
                  <h4 className={styles.image_preview_title}>Прев&#39;ю:</h4>
                  {image ? (
                    <>
                      <Image
                        width={280}
                        height={300}
                        src={image}
                        alt={currentValues.name_ua}
                        className={styles.image}
                      />
                      <Image
                        width={280}
                        height={300}
                        src="/teachers/mask.png"
                        className={styles.mask}
                        alt="mask"
                      />
                    </>
                  ) : (
                    <div className={styles.placeholder}>
                      <PreviewIcon />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.input_group}>
              <Controller
                name="name_ua"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть ім'я та прізвище:"
                    errorText={errors.name_ua?.message}
                    placeholder="Марко Федоренко"
                  />
                )}
              />
              <Controller
                name="name_en"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть ім'я та прізвище англійською мовою:"
                    errorText={errors.name_en?.message}
                    placeholder="Марко Федоренко"
                  />
                )}
              />
              <Controller
                name="speciality"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Спеціалізація (max 52 символи)"
                    errorText={errors.speciality?.message}
                    placeholder="Політичний радник..."
                  />
                )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
              <Controller
                name="linkedinLink"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть посилання на LinkedIn викладача:"
                    errorText={errors.linkedinLink?.message}
                    placeholder="Посилання на LinkedIn"
                  />
                )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
              <Controller
                name="facebookLink"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть посилання на Facebook викладача:"
                    errorText={errors.facebookLink?.message}
                    placeholder="Посилання на Facebook"
                  />
                )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
              <Controller
                name="telegramLink"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть посилання на Telegram викладача:"
                    errorText={errors.telegramLink?.message}
                    placeholder="Посилання на Telegram"
                  />
                )}
              />
            </div>
            <div className={`${styles.input_group} ${styles.input_group_small}`}>
              <Controller
                name="instagramLink"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть посилання на Instagram викладача:"
                    errorText={errors.instagramLink?.message}
                    placeholder="Посилання на Instagram"
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.about_container}>
            <h4 className={styles.subtitle}>Про викладача</h4>
            <div className={styles.about_input}>
              <div className={`${styles.input_group} ${styles.area_group}`}>
                <Controller
                  name="about_me"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextArea
                      {...field}
                      title="Про викладача (max 200 символів):"
                      errorText={errors.about_me?.message}
                      placeholder="Опис"
                    />
                  )}
                />
              </div>
              <div className={`${styles.input_group} ${styles.area_group}`}>
                <Controller
                  name="about_help"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextArea
                      {...field}
                      title="З чим може допомогти викладач? (max 200 символів):"
                      errorText={errors.about_help?.message}
                      placeholder="Опис"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.about_container}>
            <h4 className={styles.subtitle}>Про викладача англійською</h4>
            <div className={styles.about_input}>
              <div className={`${styles.input_group} ${styles.area_group}`}>
                <Controller
                  name="about_me_en"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextArea
                      {...field}
                      title="Про викладача англійською (max 200 символів):"
                      errorText={errors.about_me_en?.message}
                      placeholder="Опис англійською"
                    />
                  )}
                />
              </div>
              <div className={`${styles.input_group} ${styles.area_group}`}>
                <Controller
                  name="about_help_en"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextArea
                      {...field}
                      title="З чим може допомогти викладач англійською? (max 200 символів):"
                      errorText={errors.about_help_en?.message}
                      placeholder="Опис англійською"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <ResetButton text="Скасувати" />
            <SubmitButton
              text={isProcessing ? 'Обробка запиту...' : 'Додати викладача'}
              handleSubmit={() => {}}
              disabled={!isDirty || !isValid}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddPage
