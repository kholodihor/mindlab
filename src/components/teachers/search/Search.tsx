import Image from 'next/image'
import MainButton from '@/components/ui/main_button/MainButton'
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Запит, напрямок, ім’я, тема" />
      <Image src="/svg/search.svg" width={20} height={20} alt="search" className={styles.search} />
      <MainButton title="Шукати" />
    </div>
  )
}

export default Search
