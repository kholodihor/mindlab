'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import MainButton from '@/components/ui/main_button/MainButton'
import styles from './Search.module.css'
import { useTranslations } from 'next-intl'

interface SearchProps {
  setQuery: Dispatch<SetStateAction<string>>
  query: string
  handleClick: () => void
}

const Search = ({ setQuery, query, handleClick }: SearchProps) => {
  const isExtraSmallScreen = useMediaQuery('(max-width: 430px)')
const t = useTranslations("Spiekers");
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder={t("placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Image src="/svg/search.svg" width={20} height={20} alt="search" className={styles.search} />
      {!isExtraSmallScreen ? (
        <MainButton title={t("btn")} handleAction={handleClick} />
      ) : (
        <button className={styles.button}>
          <Image src="/svg/search_dark.svg" width={20} height={20} alt="search" />
        </button>
      )}
    </div>
  )
}

export default Search
