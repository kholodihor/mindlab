/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import styles from './Admin_TextInput.module.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  isWhite?: boolean
  errorText?: string
}

const Admin_TextInput = forwardRef(function TextInput(
  { title, errorText, isWhite, value, ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles.wrapper}>
      {!!title && (
        <label htmlFor={title} className={styles.input_title}>
          {title}
        </label>
      )}
      <input
        {...rest}
        id={title}
        value={value}
        className={`${styles.input} ${isWhite && styles.white}`}
        autoComplete="new-off"
      />
      {errorText && errorText !== undefined && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

Admin_TextInput.displayName = 'Admin_TextInput'

export default Admin_TextInput
