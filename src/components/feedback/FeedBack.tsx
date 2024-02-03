'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FeedBackFormInput } from '@/types'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { feedbackValidation } from './validationSchema'

import TextInput from '@/components/ui/inputs/text_input/TextInput'

import styles from './FeedBack.module.css'

const FeedBack = () => {
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLESHEETS_URL!

  const {
    handleSubmit,
    control,
    formState: { errors }
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
      setIsProcessing(false)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <section className="container">
      <div className={`${styles.wrapper}`}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Хей, маєш питанько?</h1>
          <p className={styles.subtitle}>Пиши, не соромся, наш адмін допоможе у всьому</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.name?.message}
                isWhite={true}
                placeholder="Ім’я"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.email?.message}
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
                errorText={errors.message?.message}
                placeholder="Що тебе цікавить?"
              />
            )}
          />
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.button} disabled={!checked}>
              {isProcessing ? 'Обробка запиту...' : 'Отримати консультацію'}
            </button>
          </div>
        </form>
        <div className={styles.check_wrapper}>
          <label className={styles.checkbox_container}>
            <input
              type="checkbox"
              className={styles.check_checkbox}
              onChange={() => setChecked(!checked)}
            />
            <span className={styles.checkmark}></span>
          </label>
          <p className={styles.check_paragraph}>
            Я приймаю умови Публічної оферти та надаю згоду на обробку моїх особистих <br /> даних
            відповідно до Політики конфіденційності
          </p>
        </div>
        <div className={styles.sun_wrapper}>
          <Image src="/svg/sun.svg" width={500} height={500} alt="sun" className={styles.sun} />
        </div>
      </div>
    </section>
  )
}

export default FeedBack
