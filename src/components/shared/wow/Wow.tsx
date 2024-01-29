import React, { FC } from 'react'
import styles from './Wow.module.css'
import WCharIcon from './svg/WCharIcon'
import OCharIcon from './svg/OCharIcon'

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
