import styles from './ResetButton.module.css'

type ResetButtonProps = {
  text: string,
  handleClick: () => void
}

const ResetButton = ({ text, handleClick } : ResetButtonProps) => {
  return <button className={styles.reset_btn} type="button" onClick={handleClick}>{text}</button>
}

export default ResetButton