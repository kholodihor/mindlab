'use client'

import Image from 'next/image'
import { useMediaQuery } from '@react-hook/media-query'
import MainButton from '@/components/ui/main_button/MainButton'
import styles from './Search.module.css'

const Search = () => {
  const isExtraSmallScreen = useMediaQuery('(max-width: 430px)')
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Запит, напрямок, ім’я, тема" />
      <Image src="/svg/search.svg" width={20} height={20} alt="search" className={styles.search} />
      {!isExtraSmallScreen ? (
        <MainButton title="Шукати" />
      ) : (
        <button className={styles.button}>
          <Image src="/svg/search_dark.svg" width={20} height={20} alt="search" />
        </button>
      )}
    </div>
  )
}

export default Search
