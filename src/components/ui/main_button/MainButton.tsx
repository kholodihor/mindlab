import styles from './MainButton.module.css'

interface MainButtonProps {
  title: string
  handleAction?: () => void
}

const MainButton = ({ title, handleAction }: MainButtonProps) => {
  return (
    <button className={styles.button} onClick={handleAction}>
      {title}
    </button>
  )
}

export default MainButton
