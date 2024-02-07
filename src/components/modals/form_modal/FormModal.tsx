'use client'
import React from 'react'
import CloseIcon from '@/components/icons/CloseIcon'
import styles from './FormModal.module.css'

interface FormModalProps {
  children: React.ReactNode
  handleClose?: () => void
}

const FormModal = ({ children, handleClose }: FormModalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={handleClose}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
}

export default FormModal
