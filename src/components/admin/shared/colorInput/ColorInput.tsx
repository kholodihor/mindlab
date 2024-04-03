'use client'

import { InputHTMLAttributes } from 'react'
import css from './ColorInput.module.css'
import Image from 'next/image'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: string
  errorText?: string | any
}

const ColorInput = ({ color, errorText, ...rest }: TextInputProps) => {
  return (
    <label className={css.label}>
      <input type="radio" {...rest} value={color} className={css.input} />
      <span className={css.span} style={{ backgroundColor: color }}></span>
      {errorText && errorText !== undefined && <span className={css.error}>{errorText}</span>}
      <Image
        src={'/svg/admin/checkmark.svg'}
        width={14}
        height={14}
        alt="icon"
        className={css.icon}
      />
    </label>
  )
}

export default ColorInput
