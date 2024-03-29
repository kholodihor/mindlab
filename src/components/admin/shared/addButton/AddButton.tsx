import styles from './AddButton.module.css'

type AddButtonProps = {
  text: string,
  handleClick: () => void
}

const AddButton = ({text, handleClick}: AddButtonProps) => {
  return <button className={styles.add_btn} type="button" onClick={handleClick}>{text}</button>
}

export default AddButton
