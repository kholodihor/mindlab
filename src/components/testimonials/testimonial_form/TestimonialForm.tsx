'use client'
import React, { useState } from 'react'
import * as z from 'zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { testimonialScheme } from './validationSchema'
import { useTestimonials } from '@/hooks/swr/useTestimonials'
import { useModal } from '@/stores/useModal'
import TextInput from '@/components/ui/inputs/text_input/TextInput'
import TextArea from '@/components/ui/inputs/text_area/TextArea'
import Checkbox from '@/components/ui/inputs/checkbox/Checkbox'
import styles from './TestimonialForm.module.css'
import { useTranslations } from 'next-intl'

const TestimonialForm = () => {
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { addNewTestimonial } = useTestimonials()
  const { closeModal } = useModal()
  const t = useTranslations()

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty }
  } = useForm<z.infer<typeof testimonialScheme>>({
    resolver: zodResolver(testimonialScheme),
    mode: 'onChange',
    defaultValues: defaultValues
  })

  const currentValues = watch()

  const validValues =
    currentValues.name !== '' && currentValues.email !== '' && currentValues.message !== ''

  const onSubmit: SubmitHandler<z.infer<typeof testimonialScheme>> = async (
    values: z.infer<typeof testimonialScheme>
  ) => {
    try {
      setIsProcessing(true)
      await addNewTestimonial(values)
      setIsProcessing(false)
      setTimeout(() => {
        closeModal()
      }, 2000)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('Testimonials.testimonialTitle')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              errorText={t(errors.name?.message)}
              placeholder={t('Feedback.form.name')}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={t(errors.email?.message)} placeholder="Email" />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              errorText={t(errors.message?.message)}
              placeholder={t('Testimonials.testimonial')}
            />
          )}
        />
        <div className={styles.button_wrapper}>
          <button
            type="submit"
            className={styles.button}
            disabled={!checked || !isDirty || !validValues || !!Object.keys(errors).length}
          >
            {isProcessing ? t('Feedback.form.loading') : t('Testimonials.btn')}
          </button>
        </div>
      </form>
      <Checkbox handleAction={() => setChecked(!checked)} />
    </div>
  )
}

export default TestimonialForm
