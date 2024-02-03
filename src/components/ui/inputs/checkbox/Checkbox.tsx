import React from 'react'
import styles from './Chekbox.module.css'

interface ChecboxProps {
  text: string
  handleAction: () => void
}

const Checkbox = ({ text, handleAction }: ChecboxProps) => {
  return (
    <div className={styles.check_wrapper}>
      <label className={styles.checkbox_container}>
        <input type="checkbox" className={styles.check_checkbox} onChange={handleAction} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.check_paragraph}>{text}</p>
    </div>
  )
}

export default Checkbox
