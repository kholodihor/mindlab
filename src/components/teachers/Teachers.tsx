'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTeachers } from '@/hooks/swr/useTeachers'
import Search from './search/Search'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'
import styles from './Teachers.module.css'

const Teachers = () => {
  const { teachers } = useTeachers()
  const [query, setQuery] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [filteredTeachers, setFilteredTeachers] = useState([])

  useEffect(() => {
    if (speciality === '') {
      setFilteredTeachers(teachers)
    } else {
      setFilteredTeachers(
        teachers?.filter(
          (teacher) => teacher?.speciality?.toLowerCase() === speciality.toLowerCase()
        )
      )
    }
  }, [speciality, teachers])

  useEffect(() => {
    if (query === '') {
      setFilteredTeachers(teachers)
    } else {
      setFilteredTeachers(
        teachers?.filter(
          (teacher) =>
            teacher?.speciality?.toLowerCase().includes(query.toLowerCase()) ||
            teacher?.name?.toLowerCase().includes(query.toLowerCase())
        )
      )
    }
  }, [query, teachers])

  return (
    <section className={`${styles.wrapper} container`} id="teachers">
      <motion.div
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        className={styles.section_title}
      >
        <h1>Провідні викладачі</h1>
      </motion.div>
      <Search setQuery={setQuery} />
      <Tabs teachers={teachers} setSpeciality={setSpeciality} speciality={speciality} />
      <Slider teachers={filteredTeachers} />
    </section>
  )
}

export default Teachers
