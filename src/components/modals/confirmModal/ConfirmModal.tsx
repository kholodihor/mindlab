'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '@/stores/useModal'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import styles from './ConfirmModal.module.css'

interface ConfirmModalProps {
  confirmText: string
  handleClose?: () => void
  handleConfirm?: (id: string, public_id: string) => void
}

const ConfirmModal = ({ confirmText, handleClose, handleConfirm }: ConfirmModalProps) => {
  const isModalOpen = useModal((state) => state.isModalOpen)

  useBodyScrollLock(isModalOpen)

  const ModalLayout = () => (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.text}>{confirmText}</div>
        <div className={styles.btn_box}>
          <button className={styles.btn_close} onClick={handleClose}>Скасувати</button>
          <button className={styles.btn_confirm} onClick={() => handleConfirm(id, public_id)}>Підтвердити</button>
        </div>
      </div>
    </div>
  )
  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>
}

export default ConfirmModal
