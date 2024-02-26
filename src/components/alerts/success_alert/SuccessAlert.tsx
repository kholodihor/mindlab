'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { useAlert } from '@/stores/useAlert'
// import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import CloseIcon from '@/components/icons/CloseIcon'
import styles from './SuccessAlert.module.css'

const SuccessAlert = () => {
  const { closeAlert } = useAlert()
  const isAlertOpen = useAlert((state) => state.isAlertOpen)

  // useBodyScrollLock(isAlertOpen)

  const ModalLayout = () => (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={closeAlert}>
          <CloseIcon />
        </div>
        <h2>Вітаємо!</h2>
        <h5 className={styles.second_title}>Ми отримали ваше повідомлення</h5>
        <p className={styles.paragraph}>Найближчим часом наш адміністратор надасть вам відповідь</p>
      </div>
    </div>
  )
  return <>{isAlertOpen && createPortal(<ModalLayout />, document.body)}</>
}

export default SuccessAlert
