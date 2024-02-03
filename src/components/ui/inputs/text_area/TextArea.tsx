/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import styles from './TextArea.module.css'

interface TextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string
  isWhite?: boolean
  errorText?: string
}

const TextArea = forwardRef(function TextInput(
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
      <textarea
        {...rest}
        id={title}
        value={value}
        rows={5}
        cols={30}
        style={{ overflow: 'hidden' }}
        className={`${styles.input} ${isWhite && styles.white}`}
        autoComplete="off"
      />
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
