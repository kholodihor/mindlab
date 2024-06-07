'use client'

import { createPortal } from 'react-dom'
import { useAlert } from '@/stores/useAlert'
import { useTranslations } from 'next-intl'
import CloseIcon from '@/components/icons/CloseIcon'
import styles from './SuccessAlert.module.css'

const SuccessAlert = () => {
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
        <h5 className={styles.second_title}>{t('confirmation')}</h5>
        <p className={styles.paragraph}>{t('adminResponse')}</p>
      </div>
    </div>
  )
  return <>{isAlertOpen && createPortal(<ModalLayout />, document.body)}</>
}

export default SuccessAlert
