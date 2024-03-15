'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '@/stores/useModal'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import styles from './MenuModal.module.css'
import MobileMenu from '@/components/header/mobile_menu/MobileMenu'

interface MenuModalProps {
  handleClose: () => void
}

const MenuModal = ({ handleClose }: MenuModalProps) => {
  const isModalOpen = useModal((state) => state.isModalOpen)

  useBodyScrollLock(isModalOpen)

  const ModalLayout = () => (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
       <MobileMenu onClose={handleClose}/>
      </div>
    </div>
  )
  return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>
}

export default MenuModal;
