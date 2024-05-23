'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useAlert } from '@/stores/useAlert'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FeedBackFormInput } from '@/types'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { feedbackValidation } from './validationSchema'
import { useDocuments } from '@/hooks/swr/useDocuments'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import SuccessAlert from '../alerts/success_alert/SuccessAlert'
import TextInput from '@/components/ui/inputs/text_input/TextInput'
import styles from './FeedBack.module.css'

const FeedBack = () => {
  const { openAlert } = useAlert()
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const alertType = useAlert((state) => state.alertType)
  const t = useTranslations()

  const { documents } = useDocuments()

  const rules = documents?.find((item) => item.fileName_ua === 'Правила користування сайтом')
  const policy = documents?.find((item) => item.fileName_ua === 'Політика конфіденційності')

  useBodyScrollLock(isAlertOpen)

  const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLESHEETS_URL!

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isDirty }
  } = useForm<FeedBackFormInput>({
    resolver: zodResolver(feedbackValidation),
    mode: 'onChange',
    defaultValues: defaultValues
  })
  const currentValues = watch()

  const validValues =
    currentValues.name !== '' && currentValues.email !== '' && currentValues.message !== ''

  const onSubmit: SubmitHandler<FeedBackFormInput> = async (values: FeedBackFormInput) => {
    try {
      setIsProcessing(true)
      const formData = new FormData()
      formData.append('Name', values.name)
      formData.append('Email', values.email)
      formData.append('Message', values.message)
      const response = await axios.post(googleSheetsUrl, formData)
      if (response.status === 200 && response.data === 'Success') {
        console.log(response)
      }
      openAlert('feedback')
      setChecked(false)
      reset()
    } catch (error: any) {
      console.log(error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section id="feedback" className={styles.container}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>{t('Feedback.title')}</h1>
          <p className={styles.subtitle}>{t('Feedback.subtitle')}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.name?.message && t(errors.name?.message)}
                isWhite={true}
                placeholder={t('Feedback.form.name')}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.email?.message && t(errors.email?.message)}
                isWhite={true}
                placeholder="Email"
                className={styles.input}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                isWhite={true}
                errorText={errors.message?.message && t(errors.message?.message)}
                placeholder={t('Feedback.form.question')}
              />
            )}
          />
          <div className={styles.button_wrapper}>
            <button
              type="submit"
              className={`${styles.button} ${checked && !Object.keys(errors).length && styles.active}`}
              disabled={!checked || !isDirty || !validValues || !!Object.keys(errors).length}
            >
              {isProcessing ? t('Feedback.form.loading') : t('Feedback.form.btn')}
            </button>
          </div>
        </form>
        <div className={styles.check_wrapper}>
          <label className={styles.checkbox_container}>
            <input
              type="checkbox"
              className={styles.check_checkbox}
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
            <span className={styles.checkmark}></span>
          </label>
          <p className={styles.check_paragraph}>
            {t('Feedback.checkbox.accept')}{' '}
            <a
              className={styles.check_link}
              target="_blank"
              rel="noopener noreferrer"
              href={rules ? rules.fileUrl : ''}
            >
              {t('Feedback.checkbox.public')}
            </a>{' '}
            {t('Feedback.checkbox.consent')}
            <a
              className={styles.check_link}
              target="_blank"
              rel="noopener noreferrer"
              href={policy ? policy.fileUrl : ''}
            >
              {t('Feedback.checkbox.policy')}
            </a>
          </p>
        </div>
        <div className={styles.sun_wrapper}>
          <Image src="/svg/sun.svg" width={500} height={500} alt="sun" className={styles.sun} />
        </div>
        <div className={styles.stars_wrapper}>
          <Image src="/stars.png" width={500} height={500} alt="sun" className={styles.stars} />
        </div>
      </div>
      {isAlertOpen && alertType === 'feedback' && <SuccessAlert />}
    </section>
  )
}

export default FeedBack
