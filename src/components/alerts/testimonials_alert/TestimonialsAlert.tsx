'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { useAlert } from '@/stores/useAlert'
import CloseIcon from '@/components/icons/CloseIcon'
import styles from './TestimonialsAlert.module.css'
import { useTranslations } from 'next-intl'

const TestimonialsAlert = () => {
    const { closeAlert } = useAlert()
    const isAlertOpen = useAlert((state) => state.isAlertOpen)
    const t = useTranslations('SuccessAlert')
  
    const ModalLayout = () => (
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.close} onClick={closeAlert}>
            <CloseIcon />
          </div>
          <h2>{t('greeting')}</h2>
          <h5 className={styles.second_title}>{t('testimonial')}</h5>
        </div>
      </div>
    )
    return <>{isAlertOpen && createPortal(<ModalLayout />, document.body)}</>
  }
export default TestimonialsAlert