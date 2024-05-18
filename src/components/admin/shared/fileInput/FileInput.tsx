'use client'

import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import {
  UseControllerProps,
  useController,
  DeepMap,
  FieldError,
  FieldValues
} from 'react-hook-form'
import styles from './FileInput.module.css'

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & { title?: string }

const FileInput = <T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  ...rest
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules })
  const [fieldValue, setFieldValue] = useState<FileList | null>(null)

  const errorMessage = (formState.errors[name] as DeepMap<FieldValues, FieldError>)?.message

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFieldValue(files)
      if (files.length === 0) {
        field.onChange(fieldValue)
      } else {
        field.onChange(files)
      }
    }
  }

  return (
    <div className={styles.file_input_group}>
      <label className={styles.file_input_title}>{title}</label>
      <label htmlFor={title + 'file'} className={styles.file_input_btn}>
        {placeholder}
      </label>
      <input type="file" id={title + 'file'} ref={field.ref} onChange={handleChange} {...rest} />

      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FileInput
