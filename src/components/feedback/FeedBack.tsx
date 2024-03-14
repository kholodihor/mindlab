'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useAlert } from '@/stores/useAlert'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FeedBackFormInput } from '@/types'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { feedbackValidation } from './validationSchema'

import TextInput from '@/components/ui/inputs/text_input/TextInput'

import styles from './FeedBack.module.css'
import SuccessAlert from '../alerts/success_alert/SuccessAlert'
import { useTranslations } from 'next-intl'

const FeedBack = () => {
  const { openAlert } = useAlert()
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const t = useTranslations()
  const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLESHEETS_URL!

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty }
  } = useForm<FeedBackFormInput>({
    resolver: zodResolver(feedbackValidation),
    mode: 'onChange',
    defaultValues: defaultValues
  })

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
      openAlert()
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
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="new-off" className={styles.form}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={t(errors.name?.message)}
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
                errorText={t(errors.email?.message)}
                isWhite={true}
                placeholder="Email"
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
                errorText={t(errors.message?.message)}
                placeholder={t('Feedback.form.question')}
              />
            )}
          />
          <div className={styles.button_wrapper}>
            <button
              type="submit"
              className={`${styles.button} ${checked && !Object.keys(errors).length && styles.active}`}
              disabled={!checked || !isDirty || !!Object.keys(errors).length}
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
            {t('Feedback.chakbox.accept')}{' '}
            <a
              className={styles.check_link}
              target="_blank"
              rel="noopener noreferrer"
              href="/documents/правила_користування_сайтом.pdf"
            >
              {t('Feedback.chakbox.public')}
            </a>{' '}
            {t('chakbox.consent')}
            <a
              className={styles.check_link}
              target="_blank"
              rel="noopener noreferrer"
              href="/documents/політика_конфіденційності.pdf"
            >
              {t('Feedback.chakbox.policy')}
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
      {isAlertOpen && <SuccessAlert />}
    </section>
  )
}

export default FeedBack
