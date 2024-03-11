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
import Checkbox from '@/components/ui/inputs/checkbox/Checkbox'
import styles from './PreRegisterForm.module.css'

const PreRegisterForm = () => {
  const [checked, setChecked] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const { addNewTestimonial } = useTestimonials()
  const { closeModal } = useModal()

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
      <h1 className={styles.title}>Попередня реєстрація</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.first_name?.message} placeholder="Ім’я" />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.last_name?.message} placeholder="Ім’я" />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput {...field} errorText={errors.email?.message} placeholder="Email" />
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
        <Checkbox handleAction={() => setChecked(!checked)} />
      </div>
    </div>
  )
}

export default PreRegisterForm
