'use client'
import React, { useState } from 'react'
import * as z from 'zod'
import axios from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { feedbackValidation } from './validationSchema'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import TextInput from '@/components/ui/inputs/text_input/TextInput'
import TextArea from '@/components/ui/inputs/text_area/TextArea'
import Checkbox from '@/components/ui/inputs/checkbox/Checkbox'
import styles from './FeedBackForm.module.css'
import { useTranslations } from 'next-intl'

const FeedBackForm = () => {
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { closeModal } = useModal()
  const { openAlert } = useAlert()
  const t = useTranslations()

  const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLESHEETS_URL!

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty }
  } = useForm<z.infer<typeof feedbackValidation>>({
    resolver: zodResolver(feedbackValidation),
    mode: 'onChange',
    defaultValues: defaultValues
  })

  const currentValues = watch()

  const validValues =
    currentValues.name !== '' && currentValues.email !== '' && currentValues.message !== ''

  const onSubmit: SubmitHandler<z.infer<typeof feedbackValidation>> = async (
    values: z.infer<typeof feedbackValidation>
  ) => {
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
      setIsProcessing(false)
      setChecked(false)
      closeModal()
      openAlert('feedback')
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('Feedback.form.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              errorText={errors.name?.message && t(errors.name?.message)}
              placeholder={t('Feedback.form.name')}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.email?.message && t( errors.email?.message)} placeholder="Email" />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              errorText={errors.message?.message && t(errors.message?.message)}
              placeholder={t('Feedback.form.question')}
            />
          )}
        />
        <button
          type="submit"
          className={`${styles.btn} ${checked && !Object.keys(errors).length && styles.active}`}
          disabled={!checked || !isDirty || !validValues || !!Object.keys(errors).length}
        >
          {isProcessing ? t('Feedback.form.loading') : t('Feedback.form.btn')}
        </button>
      </form>
      <div>
        <Checkbox handleAction={() => setChecked(!checked)} />
      </div>
    </div>
  )
}

export default FeedBackForm
