'use client'

import { useState } from 'react'

import Burger from '../icons/Burger'
import styles from './Header.module.css'
import Lottie from 'lottie-react'
import { useMediaQuery } from '@react-hook/media-query'
import chatbot_default from '@/animations/сhatbot_default.json'
import chatbot_hover from '@/animations/chatbot_hover.json'
import MobileMenu from './mobile_menu/MobileMenu'
import Logo from './logo/Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useMediaQuery('(max-width: 768px)')

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header_logo}>
        <Logo />
      </div>
      <nav className={styles.header_nav}>
        <ul>
          <li className={styles.header_nav_item}>
            <a href="#courses">Курси</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#teachers">Викладачі</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#partners">Партнери</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#parents">Для батьків</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
        <Lottie
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animationData={isHovered ? chatbot_hover : chatbot_default}
          loop={true}
          className={styles.lottie}
        />
        <div
          className={styles.header_burger}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <Burger />
        </div>
      </nav>
      {isMenuOpen && isSmallScreen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  )
}

export default Header
