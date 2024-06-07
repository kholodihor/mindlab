import React, { FC } from 'react'
import WCharIcon from './svg/WCharIcon'
import OCharIcon from './svg/OCharIcon'
import styles from './Wow.module.css'

const Wow: FC = () => {
  return (
    <div className={styles.wow}>
      <WCharIcon />
      <OCharIcon />
      <WCharIcon />
    </div>
  )
}

export default Wow
