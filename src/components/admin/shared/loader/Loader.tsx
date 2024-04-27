import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader_layout}>
      <div className={styles.loader}>
        <div className={styles.loader_after}></div>
      </div>
    </div>
  )
}

export default Loader
