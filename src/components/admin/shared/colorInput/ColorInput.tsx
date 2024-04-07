'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes, ForwardedRef, forwardRef  } from 'react'
import css from './ColorInput.module.css'
import Image from 'next/image'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  colorList: Array<string>
  title: string
  errorText?: string | any
}

const ColorInput = forwardRef(function TextInput(
  { title, errorText, colorList, ...rest }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {

  return (
   <div className={css.wrapper__color}>
    <h3 className={css.title__color}>{title}</h3>
        {colorList.map((color) => (
          <label className={css.label} key={color}>
            <input type="radio" {...rest} value={color} className={css.input} name='color'/>
            <span className={css.span} style={{ backgroundColor: color }}></span>
            <Image
              src={'/svg/admin/checkmark.svg'}
              width={14}
             height={14}
             alt="icon"
              className={css.icon}
            />
         </label>
        ))}
         {errorText && errorText !== undefined && <span className={css.error}>{errorText}</span>}
   </div>
    )

})


export default ColorInput

