'use client'

import { useState } from 'react'
import { useForms } from '@/hooks/swr/useForms'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FormValidation, FormFields } from '../formsScheme'
import { zodResolver } from '@hookform/resolvers/zod'
import Swal from 'sweetalert2'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import PageTitle from '../../shared/pageTitle/PageTitle'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Loader from '../../shared/loader/Loader'
import css from '../FormsEditor.module.css'

const AddForms = () => {
  const { addForm, isLoading } = useForms()
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    control,
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

  const onSubmit: SubmitHandler<FormFields> = async (values: FormFields) => {
    setIsProcessing(true)
    const response = await addForm(values)
    setIsProcessing(false)
    if (!response) {
      return Swal.fire({
        title: 'Щось пішдо не так. Спробуйте знову',
        icon: 'error'
      })
    }
    if (response.status === 200) {
      Swal.fire({
        title: 'Форму успішно додано',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/admin/forms')
        }
      })
    }
  }
  return (
    <div>
      <PageTitle
        title="Додавання форми"
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
          <SubmitButton text="Додати форму" disabled={!isDirty || !isValid} />
        </div>
      </form>
      {(isLoading || isProcessing) && <Loader />}
    </div>
  )
}

export default AddForms
