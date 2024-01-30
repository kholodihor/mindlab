/* eslint-disable @typescript-eslint/no-unused-vars */
import { nanoid } from 'nanoid'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import styles from './TextInput.module.css'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  errorText?: string
}

const TextInput = forwardRef(function TextInput(
  { title, errorText, value = '', ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid()

  return (
    <div className={styles.wrapper}>
      {!!title && (
        <label htmlFor={id} className="">
          {title}
        </label>
      )}
      <input {...rest} id={id} value={value} className={styles.input} />
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

TextInput.displayName = 'TextInput'

export default TextInput
