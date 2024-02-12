import React from 'react'
import styles from './MobileMenu.module.css'
import CloseIconXL from '@/components/icons/CloseIconXL'

const MobileMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_header}>
        <h2 className={styles.menu_title}>Меню</h2>
        <div>
          <CloseIconXL />
        </div>
      </div>
      <nav className={styles.menu_nav}>
        <ul>
          <li className={styles.header_nav_item}>
            <a href="#courses">Курси</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Викладачі</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Партнери</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Для батьків</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Контакти</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
