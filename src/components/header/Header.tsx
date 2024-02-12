'use client'

import { useState } from 'react'

import Burger from '../icons/Burger'
import styles from './Header.module.css'
import Logo from './logo/Logo'
import MobileMenu from './mobile_menu/MobileMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Logo />
      </div>
      <nav className={styles.header_nav}>
        <div
          className={styles.header_burger}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <Burger />
        </div>
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
      {isMenuOpen && <MobileMenu />}
    </header>
  )
}

export default Header
