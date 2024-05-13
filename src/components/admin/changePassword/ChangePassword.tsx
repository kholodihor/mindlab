'use client'

import React, { useState, useEffect } from 'react'
import styles from './ChangePassword.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import PageTitle from '../shared/pageTitle/PageTitle'
import Loader from '../shared/loader/Loader'
import Admin_TextInput from '../ui/admin_inputs/text_input/Admin_TextInput'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ChangePasswordValidation, FormFields } from './ChangePasswordShemaValidation'
import { useModal } from '@/stores/useModal'
import { useSession } from 'next-auth/react'
import ConfirmModal from '@/components/modals/confirmModal/ConfirmModal'
import { changePassword } from '@/utils/api/password'
import { signOut } from 'next-auth/react'

const ChangePassword = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const { openModal, closeModal } = useModal()
  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)
  const router = useRouter()

  const { data: session } = useSession()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: zodResolver(ChangePasswordValidation),
    mode: 'onChange'
  })

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()
        openModal('confirm')
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [openModal])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setIsProcessing(true)
      const values = {
        email: session.user.email,
        password: data.password
      }
      const response = await changePassword(values)
      setIsProcessing(false)
      if (response.status === 200) {
        signOut({ callbackUrl: '/login' })
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <PageTitle
        title="зміна паролю"
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
      />
      <div className={styles.content}>
        <div className={styles.password_info}>
          <div className={styles.password_detail}>
            <h5 className={styles.password_title}>Логін:</h5>
            <p className={styles.password_subtitle}>
              {session.user.email ? session.user.email : 'example@mail.ua'}
            </p>
          </div>
        </div>
        <div className={styles.change_password}>
          <form>
            <div className={styles.change_password_input}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть новий пароль (max 12 символів)"
                    placeholder="Новий пароль"
                    errorText={errors.password?.message}
                  />
                )}
              />
            </div>
            <div className={styles.change_password_input}>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Підтвердіть новий пароль:"
                    placeholder="Новий пароль"
                    errorText={errors.confirmPassword?.message}
                  />
                )}
              />
            </div>
          </form>
        </div>
      </div>
      {isProcessing && <Loader />}

      {isModalOpen && modalType === 'confirm' && (
        <ConfirmModal
          confirmText="Ви впевнені, що хочете змінити свій пароль?"
          handleClose={closeModal}
          onConfirm={handleSubmit(onSubmit)}
        />
      )}
    </section>
  )
}

export default ChangePassword
