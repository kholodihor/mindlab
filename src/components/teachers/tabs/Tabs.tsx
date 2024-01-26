'use client'
import { tabs } from './data'
import styles from './Tabs.module.css'

const Tabs = () => {
  return (
    <div className={styles.wrapper}>
      {tabs.map((tab, index) => (
        <div key={index} className={`${styles.tab} ${index === 0 && styles.active}`}>
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs
