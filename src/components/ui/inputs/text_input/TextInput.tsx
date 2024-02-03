/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import styles from './TextInput.module.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  isWhite?: boolean
  errorText?: string
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, isWhite, value = '', ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles.wrapper}>
      {!!title && (
        <label htmlFor={title} className="">
          {title}
        </label>
      )}
      <input
        {...rest}
        id={title}
        value={value}
        className={`${styles.input} ${isWhite && styles.white}`}
        autoComplete="off"
      />
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

TextInput.displayName = 'TextInput'

export default TextInput
