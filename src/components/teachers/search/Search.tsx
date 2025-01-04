/* eslint-disable no-unused-vars */
'use client'

import { ChangeEvent } from 'react'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from '@react-hook/media-query'
import Image from 'next/image'
import MainButton from '@/components/ui/main_button/MainButton'
import styles from './Search.module.css'

interface SearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const Search = ({ value, onChange, placeholder }: SearchProps) => {
  const isExtraSmallScreen = useMediaQuery('(max-width: 500px)')
  const t = useTranslations('Speakers')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || t('placeholder')}
        className={styles.input}
        aria-label={placeholder || t('placeholder')}
      />
      <Image 
        src="/svg/search.svg" 
        width={20} 
        height={20} 
        alt="search" 
        className={styles.search}
      />
      {!isExtraSmallScreen ? (
        <MainButton 
          title={t('btn')} 
          handleAction={() => {}} // Search is now real-time
        />
      ) : (
        <button className={styles.button}>
          <Image 
            src="/svg/search_dark.svg" 
            width={20} 
            height={20} 
            alt="search" 
          />
        </button>
      )}
    </div>
  )
}

export default Search
