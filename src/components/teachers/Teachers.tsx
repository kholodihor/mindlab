'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Search from './search/Search'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'
import styles from './Teachers.module.css'

const Teachers = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <motion.div
        viewport={{ once: true }}
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
        className={styles.section_title}
      >
        <h1>Провідні викладачі</h1>
      </motion.div>
      <Search />
      <Tabs />
      <Slider />
    </section>
  )
}

export default Teachers
