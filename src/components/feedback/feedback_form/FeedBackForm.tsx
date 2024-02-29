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

const FeedBackForm = () => {
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { closeModal } = useModal()
  const { openAlert } = useAlert()

  const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLESHEETS_URL!

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<z.infer<typeof feedbackValidation>>({
    resolver: zodResolver(feedbackValidation),
    mode: 'onChange',
    defaultValues: defaultValues
  })

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
      openAlert()
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Маєте питання?</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.name?.message} placeholder="Ім’я" />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.email?.message} placeholder="Email" />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea {...field} errorText={errors.message?.message} placeholder="Ваш комментар" />
          )}
        />
        <div className={styles.button_wrapper}>
          <button
            type="submit"
            className={styles.btn}
            disabled={!checked || !!Object.keys(errors).length}
          >
            {isProcessing ? 'Обробка запиту...' : 'Отримати консультацію'}
          </button>
        </div>
      </form>
      <div>
        <Checkbox
          text="Я приймаю умови Публічної оферти та надаю згоду на обробку моїх особистих даних
          відповідно до Політики конфіденційності"
          handleAction={() => setChecked(!checked)}
        />
      </div>
    </div>
  )
}

export default FeedBackForm
