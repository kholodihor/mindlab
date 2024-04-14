import Link from 'next/link'
import styles from './PasswordButton.module.css'
import PasswordIcon from './icons/PasswordIcon'

const PasswordButton = () => {
  return(
    <Link href='/admin/changePassword'>
      <button className={styles.password_btn} type="button">
        <PasswordIcon />
      </button>
    </Link>
  )
}

export default PasswordButton
