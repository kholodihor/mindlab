/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { ForwardedRef, InputHTMLAttributes, forwardRef, useRef, useEffect } from 'react'
import styles from './Admin_TextArea.module.css'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string
  isWhite?: boolean
  errorText?: string
}

const Admin_TextArea = forwardRef(function TextInput(
  { title, errorText, isWhite, value = '', ...rest }: TextAreaProps,
  _ref: ForwardedRef<HTMLTextAreaElement>
) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    autoResize();
  }, [value]);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "0";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
  return (
    <div className={styles.wrapper}>
      {!!title && (
        <label htmlFor={title} className={styles.input_title}>
          {title}
        </label>
      )}
      <textarea
        {...rest}
        ref={textareaRef}
        id={title}
        value={value}
        rows={5}
        cols={30}
        style={{ overflow: 'hidden' }}
        className={`${styles.input} ${isWhite && styles.white}`}
        autoComplete="new-off"
      />
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
})

Admin_TextArea.displayName = 'Admin_TextArea'

export default Admin_TextArea

