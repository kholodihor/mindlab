'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useTeachers } from '@/hooks/swr/useTeachers'
import { useTeacherFilter } from '@/hooks/useTeacherFilter'
import { useDebounce } from '@/hooks/useDebounce'
import Search from './search/Search'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'
import styles from './Teachers.module.css'

const Teachers = () => {
  const { teachers, isLoading } = useTeachers()
  const [query, setQuery] = useState('')
  const [speciality, setSpeciality] = useState('')
  const t = useTranslations('Speakers')

  // Debounce the search query to avoid excessive filtering
  const debouncedQuery = useDebounce(query, 300)

  // Use our custom hook for filtering
  const filteredTeachers = useTeacherFilter(teachers, {
    query: debouncedQuery,
    speciality
  })

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
    setSpeciality('') // Reset speciality when searching
  }

  const handleSpecialityChange = (newSpeciality: string) => {
    setSpeciality(newSpeciality)
    setQuery('') // Reset query when changing speciality
  }

  return (
    <section id="teachers" className={`${styles.wrapper} container`}>
      <motion.h2
        className={`${styles.section_title} title`}
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          duration: 1
        }}
      >
        {t('title')}
      </motion.h2>

      <Search
        value={query}
        onChange={handleSearch}
        placeholder={t('placeholder')}
      />

      <Tabs
        teachers={teachers}
        onSpecialityChange={handleSpecialityChange}
        selectedSpeciality={speciality}
      />

      {filteredTeachers.length > 0 ? (
        <Slider teachers={filteredTeachers} />
      ) : (
        <p className={styles.not_found}>
          {isLoading ? t('loading') : t('notFound')}
        </p>
      )}
    </section>
  )
}

export default Teachers
