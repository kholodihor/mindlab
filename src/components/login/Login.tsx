'use client'

import * as z from 'zod'
import React, { useState, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { defaultValues } from './defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginScheme } from './validationSchema'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import TextInput from '@/components/ui/inputs/text_input/TextInput'
import PasswordInput from '../ui/inputs/password-input/PasswordInput'

import styles from './Login.module.css'

const Login = () => {
  const router = useRouter()
  const session = useSession()
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/admin')
    }
  }, [session, router])

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<z.infer<typeof loginScheme>>({
    resolver: zodResolver(loginScheme),
    mode: 'onChange',
    defaultValues: defaultValues
  })

  const onSubmit: SubmitHandler<z.infer<typeof loginScheme>> = async (
    values: z.infer<typeof loginScheme>
  ) => {
    try {
      setIsProcessing(true)
      await signIn('credentials', {
        ...values,
        redirect: false
      }).then((callback) => {
        setIsProcessing(false)
        if (callback?.ok) {
          router.replace('/admin')
          router.refresh()
        }
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Адміністрування сайту</h1>
          <p className={styles.subtitle}>Для входу на панель адміністратора<br />
            підтвердіть свій акаунт</p>
        </div>
        <div className={styles.form_wrapper}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className={styles.form}>
            <label className={styles.inputLabel}>Введіть логін:</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorText={errors.email?.message}
                  isWhite={true}
                  placeholder="Логін"
                />
              )}
            />
            <label className={styles.inputLabel}>Введіть пароль :</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  errorText={errors.password?.message}
                  isWhite={true}
                  placeholder="Пароль"
                />
              )}
            />
            <div className={styles.button_wrapper}>
              <button type="submit" className={styles.button} disabled={isProcessing}>
                {isProcessing ? 'Обробка запиту...' : 'Увійти'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
