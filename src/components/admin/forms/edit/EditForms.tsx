'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForms } from '@/hooks/swr/useForms'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FormValidation, FormFields } from '../formsScheme'
import { zodResolver } from '@hookform/resolvers/zod'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import css from '../FormsEditor.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Loader from '../../shared/loader/Loader'
import Swal from 'sweetalert2'

const EditForms = ({ id }: { id: string }) => {
  const { getFormById, updateForm, isLoading } = useForms()
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(FormValidation),
    mode: 'onChange',
    defaultValues: {
      name: '',
      formLink: '',
      excelLink: ''
    }
  })

  const form = getFormById(id)
  console.log(form)

  const currentValues = watch()
  console.log(currentValues)

  useEffect(() => {
    if (form) {
      setValue('name', form.name)
      setValue('formLink', form.formLink)
      setValue('excelLink', form.excelLink)
    }
  }, [id])

  const onSubmit: SubmitHandler<FormFields> = async (values: FormFields) => {
    console.log(values)
    try {
      setIsProcessing(true)
      const response = await updateForm(id, values)
      console.log('response=>', response)
      if (!response) {
        Swal.fire({
          title: 'Щось пішло не так',
          icon: 'success'
        })
      }
      Swal.fire({
        title: 'Форму успішно відредаговано',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/admin/forms')
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
    <div className="page">
      <PageTitle
        title="Редагування форми"
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
                  title="Введіть назву форми:"
                  errorText={errors.name?.message && errors.name?.message}
                  placeholder="Назва форми англійською"
                />
              )}
            />
            <Controller
              name="formLink"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Введіть лінк до Google Forms:"
                  errorText={errors.formLink?.message && errors.formLink?.message}
                  placeholder="Лінк до Google Forms"
                />
              )}
            />
            <Controller
              name="excelLink"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Введіть лінк то таблиці Excel:"
                  errorText={errors.excelLink?.message && errors.excelLink?.message}
                  placeholder="Лінк то таблиці Excel"
                />
              )}
            />
          </div>
        </div>
        <div className={css.btt__form}>
          <ResetButton text="Скасувати" />
          <SubmitButton text="Зберегти зміни" disabled={!isDirty || !isValid} />
        </div>
      </form>
      {(isLoading || isProcessing) && <Loader />}
    </div>
  )
}

export default EditForms
