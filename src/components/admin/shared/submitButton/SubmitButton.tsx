import styles from './SubmitButton.module.css'

type SubmitButtonProps = {
  text: string,
  handleSubmit: () => void
}

const SubmitButton = ({ text, handleSubmit } : SubmitButtonProps) => {
  return <button className={styles.submit_btn} type="submit" onSubmit={handleSubmit}>{text}</button>
}

export default SubmitButton