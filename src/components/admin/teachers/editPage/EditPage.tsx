'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { TeachersFormValidation, FormFields } from '../TeachersValidationSchema'
import styles from './EditPage.module.css'
import { useTeachers } from '@/hooks/swr/useTeachers'
import PageTitle from '../../shared/pageTitle/PageTitle'
import FileInput from '../../shared/fileInput/FileInput'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Image from 'next/image'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { defaultValues } from '../defaultValues'

const EditPage = ({ id }: { id: string }) => {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const { getTeacherById, updateTeacher } = useTeachers()

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: zodResolver(TeachersFormValidation),
    defaultValues: defaultValues,
    mode: 'onChange'
  })

  const [image, setImage] = useState('')

  useEffect(() => {
    const teacherData = getTeacherById(id)

    if (teacherData) {
      setValue('name', teacherData.name)
      setValue('speciality', teacherData.speciality)
      setValue('about_me', teacherData.about_me)
      setValue('about_help', teacherData.about_help)
      setValue('about_me_en', teacherData.about_me_en)
      setValue('about_help_en', teacherData.about_help_en)
      setValue('linkedinLink', teacherData.linkedinLink)
      setValue('facebookLink', teacherData.facebookLink)
      setValue('telegramLink', teacherData.telegramLink)
      setValue('instagramLink', teacherData.instagramLink)
      setValue('image', [new File([], teacherData?.imageUrl, { type: 'for-url' })])
      setImage(teacherData?.imageUrl)
    }
  }, [id])

  const currentValues = watch()
  console.log(currentValues)

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  }

  useEffect(() => {
    if (!currentValues.image[0]?.size) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsProcessing(true)
    await updateTeacher(id, data)
    setIsProcessing(false)
    router.push('/admin/teachers')
  }

  return (
    <section>
      <PageTitle
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
        title="редагування викладача"
      />
      <div className={styles.edit_container}>
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
                  <Image
                    width={280}
                    height={300}
                    src={image}
                    alt={currentValues.name}
                    className={styles.image}
                  />
                  <Image
                    width={280}
                    height={300}
                    src="/teachers/mask.png"
                    className={styles.mask}
                    alt="mask"
                  />
                </div>
              </div>
            </div>
            <div className={styles.input_group}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть ім'я та прізвище:"
                    errorText={errors.name?.message}
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
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.btn_container}>
            <ResetButton text="Скасувати" />
            <SubmitButton
              text={isProcessing ? 'Обробка запиту...' : 'Застосувати зміни'}
              handleSubmit={() => {}}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default EditPage
