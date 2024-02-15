import React from 'react'

import Search from './search/Search'

import styles from './Teachers.module.css'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'

const Teachers = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.section_title}>
        <h1>Провідні викладачі</h1>
      </div>
      <Search />
      <Tabs />
      <Slider />
    </section>
  )
}

export default Teachers
