'use client'

import React, { useState, useEffect } from 'react'
import styles from './AddPage.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import PageTitle from '../../shared/pageTitle/PageTitle'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import FileInput from '../../shared/fileInput/FileInput'
import { useDocuments } from '@/hooks/swr/useDocuments'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { DocumentsFormValidation, FormFields } from '../DocumentsValidationSchema'
import { defaultValues } from '../defaultValues'

const AddPage = () => {
  const [fileName, setFileName] = useState<File | null>(null)
  const { addDocument } = useDocuments()
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(DocumentsFormValidation),
    defaultValues: defaultValues,
    mode: 'onChange'
  })

  const currentValues = watch()

  useEffect(() => {
    if (!currentValues.file?.length) return
    const file = currentValues.file[0]
    setFileName(file)
    console.log(file)
  }, [currentValues.file])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsProcessing(true)
    await addDocument(data)
    setIsProcessing(false)
    router.back()
  }

  return (
    <section>
      <PageTitle
        title="Додавання документу"
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
      />
      <div className={styles.add_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.add_detail}>
            <div className={styles.add_detailName}>
              <div className={styles.input_group}>
                <Controller
                  name="fileName_ua"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextInput
                      {...field}
                      title="Введіть назву документу українською мовою:"
                      errorText={errors.fileName_ua?.message}
                      placeholder="Назва документу"
                    />
                  )}
                />
              </div>
              <div className={styles.input_group}>
                <Controller
                  name="fileName_en"
                  control={control}
                  render={({ field }) => (
                    <Admin_TextInput
                      {...field}
                      title="Введіть назву документу англійською мовою:"
                      errorText={errors.fileName_en?.message}
                      placeholder="Document title"
                    />
                  )}
                />
              </div>
            </div>
            
            <div className={styles.input_group}>
              <Admin_TextInput title="Завантажте файл PDF" value={fileName?.name} />
              <FileInput
                name="file"
                control={control}
                accept=".pdf"
                placeholder="Завантажити з комп’ютера"
              />
            </div>
          </div>

          <div className={styles.btn_container}>
            <ResetButton text="Скасувати" />
            <SubmitButton
              text={isProcessing ? 'Обробка запиту...' : 'Додати документ'}
              handleSubmit={() => {}}
              disabled={!isDirty || !isValid}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddPage
