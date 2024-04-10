import Link from 'next/link'
import styles from './AddButton.module.css'

type AddButtonProps = {
  text: string
  href: string
}

const AddButton = ({text, href}: AddButtonProps) => {
  return (
    <Link href={`/admin/${href}`}><button className={styles.add_btn} type="button">{text}</button></Link>
  )
}

export default AddButton
