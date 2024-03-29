import styles from './PasswordButton.module.css'
import PasswordIcon from './icons/PasswordIcon'

type PasswordButtonProps = {
  handleClick: () => void
}

const PasswordButton = ({ handleClick } : PasswordButtonProps) => {
  return <button className={styles.password_btn} type="button" onClick={handleClick}>
    <PasswordIcon />
  </button>
}

export default PasswordButton
