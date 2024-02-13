import React from 'react'

import Search from './search/Search'

import styles from './Teachers.module.css'
import Tabs from './tabs/Tabs'
import Slider from './slider/Slider'

const Teachers = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <Search />
      <Tabs />
      <Slider />
    </div>
  )
}

export default Teachers
