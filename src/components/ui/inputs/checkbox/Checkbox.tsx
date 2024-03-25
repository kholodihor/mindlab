import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './Chekbox.module.css'

interface ChecboxProps {
  handleAction: () => void
}

const Checkbox = ({ handleAction }: ChecboxProps) => {
  const t = useTranslations('Feedback')
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
          href="/documents/правила_користування_сайтом.pdf"
        >
          {t('checkbox.public')}
        </a>
        {t('checkbox.consent')}
        <a
          className={styles.check_link}
          target="_blank"
          rel="noopener noreferrer"
          href="/documents/політика_конфіденційності.pdf"
        >
          {t('checkbox.policy')}
        </a>
      </p>
    </div>
  )
}

export default Checkbox
