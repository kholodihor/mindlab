'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactsFormValidation, FormFields } from '../ContactValidation'
import styles from './EditPage.module.css'
import { useContacts } from '@/hooks/swr/useContacts'
import PageTitle from '../../shared/pageTitle/PageTitle'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { defaultValues } from '../defaultValues'
import {contacts} from '../contact'

const EditPage = ({ name }: { name: string }) => {
  const editedContact = contacts.filter((contact) => contact.name.toString().toLowerCase() === name)

    console.log(editedContact, name)
  
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const { getContactByName, updateContact } = useContacts()
  
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: zodResolver(ContactsFormValidation),
    defaultValues: defaultValues,
    mode: 'onChange'
  })

  /*useEffect(() => {
    const contactData = getContactByName(name)

    if (contactData) {
      setValue('email', contactData.email)
      setValue('phone', contactData.phone)
      setValue('instagramLink', contactData.linkedinLink)
      setValue('facebookLink', contactData.facebookLink)
      setValue('telegramLink', contactData.telegramLink)
    }
  }, [name])*/

  const currentValues = watch()

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsProcessing(true)
    /*await updateContact(name, data)*/
    setIsProcessing(false)
    router.push('/admin/contacts')
  }

  return (
    <section>
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
                  <h4>{editedContact[0].name}</h4>
                </div>
                <p className={styles.contact_input}>{editedContact[0].value}</p>
              </div>
              <div className={styles.edit_input}>
                { editedContact[0].name === "Пошта" && 
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput 
                      {...field}
                      title='Введіть новий email' 
                      placeholder='Нове email' 
                      errorText={errors.email?.message}
                      />
                    )}
                  />
                }
                
                {editedContact[0].name === "Телефон" && 
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput 
                      {...field}
                      title='Введіть номер телефону'
                      placeholder='Новий номер телефон'
                      errorText={errors.phone?.message}
                      />
                    )}
                  />
                }

                {editedContact[0].name === "Instagram" && 
                  <Controller
                    name="instagramLink"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput 
                      {...field}
                      title='Введіть нове посилання'
                      placeholder='Нове посилання'
                      errorText={errors.instagramLink?.message}
                      />
                    )}
                  />
                }

                {editedContact[0].name === "Facebook" && 
                  <Controller
                    name="facebookLink"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput 
                      {...field}
                      title='Введіть нове посилання'
                      placeholder='Нове посилання'
                      errorText={errors.facebookLink?.message}
                      />
                    )}
                  />
                }

                {editedContact[0].name === "Telegram" && 
                  <Controller
                    name="telegramLink"
                    control={control}
                    render={({ field }) => (
                      <Admin_TextInput 
                      {...field}
                      title='Введіть нове посилання'
                      placeholder='Нове посилання'
                      errorText={errors.telegramLink?.message}
                      />
                    )}
                  />
                }
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
    </section>
  )
}

export default EditPage
