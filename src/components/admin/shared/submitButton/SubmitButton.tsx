import styles from './SubmitButton.module.css'

type SubmitButtonProps = {
  text: string
  handleSubmit?: () => void
  disabled?: boolean
}

const SubmitButton = ({ text, handleSubmit, disabled }: SubmitButtonProps) => {
  return (
    <button className={styles.submit_btn} type="submit" onSubmit={handleSubmit} disabled={disabled}>
      {text}
    </button>
  )
}

export default SubmitButton
