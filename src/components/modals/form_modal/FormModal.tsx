import React from 'react'
import styles from './FormModal.module.css'

const FormModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>{children}</div>
    </div>
  )
}

export default FormModal
