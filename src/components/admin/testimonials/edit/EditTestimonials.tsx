'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { testimonialScheme } from '@/components/testimonials/testimonial_form/validationSchema'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import css from '../add/AddTestimonials.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import { useTestimonials } from '@/hooks/swr/useTestimonials'
import { useRouter } from 'next/navigation'
import Loader from '../../shared/loader/Loader'
import { defaultValue } from './defaultValue'
import { useState } from 'react'
import Swal from 'sweetalert2'

const EditTestimonials = ({ id }: { id: string }) => {
  const { isLoading, getTestimonialById, updateTestimonial } = useTestimonials()
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const testimon = getTestimonialById(id)

  // useEffect(()=> {console.log(testimon)
  //   console.log('isError=>', isError)
  //   console.log(id)
  // },[testimon, isError, id])

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid }
  } = useForm<z.infer<typeof testimonialScheme>>({
    resolver: zodResolver(testimonialScheme),
    mode: 'onChange',
    defaultValues: defaultValue(testimon)
  })

  const onSubmit: SubmitHandler<z.infer<typeof testimonialScheme>> = async (
    data: z.infer<typeof testimonialScheme>
  ) => {
    console.log(data, id)
    try {
      setIsProcessing(true)
      const response = await updateTestimonial(data, id)
      console.log('response=>', response)
      if (!response) {
        Swal.fire({
          title: 'Щось пішло не так',
          icon: 'success'
        })
      }
      Swal.fire({
        title: 'Відгук успішно відредаговано',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/admin/testimonials')
        }
      })
    } catch (error: any) {
      console.log('error catch=>', error)
      Swal.fire({
        title: error,
        icon: 'error'
      })
    } finally {
      setIsProcessing(false)
    }
  }
  return (
    <div>
      <PageTitle
        title="Редагування відгуку"
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.form}>
          <div className={css.leftPart}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Введіть ім’я користувача:"
                  errorText={errors.name?.message && errors.name?.message}
                  placeholder="Iм’я"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  type="email"
                  title="Введіть email"
                  errorText={errors.email?.message && errors.email?.message}
                  placeholder="email"
                />
              )}
            />
          </div>
          <div className={css.rightPart}>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Admin_TextArea
                  {...field}
                  title="Введіть відгук (max 350 символів):"
                  errorText={errors.message?.message && errors.message?.message}
                  placeholder="Відгук"
                  maxCharQuantity="350"
                />
              )}
            />
          </div>
        </div>
        <div className={css.btt__form}>
          <ResetButton text="Скасувати" />
          <SubmitButton text="Опублікувати відгук" disabled={!isDirty || !isValid} />
        </div>
      </form>
      {(isLoading || isProcessing) && <Loader />}
    </div>
  )
}

export default EditTestimonials
