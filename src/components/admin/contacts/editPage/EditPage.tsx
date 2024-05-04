'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ContactsFormValidation, FormFields } from '../ContactValidation'
import { translateContactsNames } from '@/helpers/contactNames'
import { useContacts } from '@/hooks/swr/useContacts'
import PageTitle from '../../shared/pageTitle/PageTitle'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Loader from '../../shared/loader/Loader'
import styles from './EditPage.module.css'

const EditPage = ({ name }: { name: string }) => {
  const { contacts, isLoading, updateContact } = useContacts()

  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: zodResolver(ContactsFormValidation),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsProcessing(true)
    await updateContact(contacts[0].id, data)
    setIsProcessing(false)
    router.push('/admin/contacts')
  }

  return (
    <section className={styles.wrapper}>
      <PageTitle
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
        title="редагування контактів"
      />
      <div className={styles.edit_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.edit_form}>
            <div className={styles.edit_form_container}>
              <div className={styles.edit_input}>
                <div className={styles.contact_title}>
                  <span className={styles.contact_icon}></span>
                  <h4>{translateContactsNames(name)}</h4>
                </div>
                <p className={styles.contact_input}>{contacts[0][name]}</p>
              </div>
              <div className={styles.edit_input}>
                {name === 'email' && (
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput
                        {...field}
                        title="Введіть новий email"
                        placeholder="Новий email"
                        errorText={errors.email?.message}
                      />
                    )}
                  />
                )}

                {name === 'phone' && (
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput
                        {...field}
                        title="Введіть номер телефону"
                        placeholder="Новий номер телефону"
                        errorText={errors.phone?.message}
                      />
                    )}
                  />
                )}

                {name === 'instagram' && (
                  <Controller
                    name="instagram"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput
                        {...field}
                        title="Введіть нове посилання"
                        placeholder="Нове посилання"
                        errorText={errors.instagram?.message}
                      />
                    )}
                  />
                )}

                {name === 'facebook' && (
                  <Controller
                    name="facebook"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput
                        {...field}
                        title="Введіть нове посилання"
                        placeholder="Нове посилання"
                        errorText={errors.facebook?.message}
                      />
                    )}
                  />
                )}

                {name === 'telegram' && (
                  <Controller
                    name="telegram"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput
                        {...field}
                        title="Введіть нове посилання"
                        placeholder="Нове посилання"
                        errorText={errors.telegram?.message}
                      />
                    )}
                  />
                )}
              </div>
            </div>
            <div className={styles.btn_container}>
              <ResetButton text="Скасувати" />
              <SubmitButton
                text={isProcessing ? 'Обробка запиту...' : 'Застосувати зміни'}
                handleSubmit={() => {}}
              />
            </div>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
    </section>
  )
}

export default EditPage
