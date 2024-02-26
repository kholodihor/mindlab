'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '@/stores/useModal'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import CloseIcon from '@/components/icons/CloseIcon'
import styles from './FormModal.module.css'

interface FormModalProps {
  children: React.ReactNode
  handleClose?: () => void
}

const FormModal = ({ children, handleClose }: FormModalProps) => {
  const isModalOpen = useModal((state) => state.isModalOpen)

  useBodyScrollLock(isModalOpen)

  const ModalLayout = () => (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={handleClose}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>
}

export default FormModal
