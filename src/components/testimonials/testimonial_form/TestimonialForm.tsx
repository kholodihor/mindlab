import React, { useState } from 'react'
import * as z from 'zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { testimonialScheme } from './validationSchema'
import styles from './TestimonialForm.module.css'
import TextInput from '@/components/ui/inputs/text_input/TextInput'
import TextArea from '@/components/ui/inputs/text_area/TextArea'
import Checkbox from '@/components/ui/inputs/checkbox/Checkbox'

const TestimonialForm = () => {
  const [checked, setChecked] = useState(false)
  const [subscribe, setSubscribe] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<z.infer<typeof testimonialScheme>>({
    resolver: zodResolver(testimonialScheme),
    mode: 'onChange',
    defaultValues: defaultValues
  })

  const onSubmit: SubmitHandler<z.infer<typeof testimonialScheme>> = async (
    values: z.infer<typeof testimonialScheme>
  ) => {
    try {
      setIsProcessing(true)
      console.log(values)
      setIsProcessing(false)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ми будемо раді вас почути!</h1>
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
            className={styles.button}
            disabled={!checked || !!Object.keys(errors).length}
          >
            {isProcessing ? 'Обробка запиту...' : 'Залишити коментар'}
          </button>
        </div>
      </form>
      <div>
        <Checkbox
          text="Я приймаю умови Публічної оферти та надаю згоду на обробку моїх особистих даних
          відповідно до Політики конфіденційності"
          handleAction={() => setChecked(!checked)}
        />
        <Checkbox
          text="Я хочу отримувати новини від MindLab на мою електронну пошту"
          handleAction={() => setSubscribe(!subscribe)}
        />
      </div>
    </div>
  )
}

export default TestimonialForm
