import React from 'react'
import { useTranslations } from 'next-intl'
import { useDocuments } from '@/hooks/swr/useDocuments'
import styles from './Chekbox.module.css'

interface ChecboxProps {
  handleAction: () => void
}

const Checkbox = ({ handleAction }: ChecboxProps) => {
  const t = useTranslations('Feedback')
  const { documents } = useDocuments()

  const rules = documents?.find((item) => item.fileName_ua === 'Правила користування сайтом')
  const policy = documents?.find((item) => item.fileName_ua === 'Політика конфіденційності')

  return (
    <div className={styles.check_wrapper}>
      <label className={styles.checkbox_container}>
        <input type="checkbox" className={styles.check_checkbox} onChange={handleAction} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.check_paragraph}>
        {t('checkbox.accept')}
        <a
          className={styles.check_link}
          target="_blank"
          rel="noopener noreferrer"
          href={rules ? rules.fileUrl : ''}
        >
          {t('checkbox.public')}
        </a>
        {t('checkbox.consent')}
        <a
          className={styles.check_link}
          target="_blank"
          rel="noopener noreferrer"
          href={policy ? policy.fileUrl : ''}
        >
          {t('checkbox.policy')}
        </a>
      </p>
    </div>
  )
}

export default Checkbox
