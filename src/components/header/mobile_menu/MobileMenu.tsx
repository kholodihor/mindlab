'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import chatbot_default from '@/animations/сhatbot_default.json'
import chatbot_hover from '@/animations/chatbot_hover.json'
import styles from './MobileMenu.module.css'
import CloseIconXL from '@/components/icons/CloseIconXL'
import MailIcon from '@/components/icons/MailIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'

type MobileMenuProps = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_header}>
        <h2 className={styles.menu_title}>Меню</h2>
        <div onClick={onClose}>
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
          <li className={styles.header_nav_item}>
            <Lottie
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animationData={isHovered ? chatbot_hover : chatbot_default}
              loop={true}
              className={styles.lottie}
            />
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={styles.header_nav_item_button}
            >
              Чат-бот
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
        <Image
          className={styles.image}
          src="/contacts/facebook.svg"
          alt="instagram"
          width={50}
          height={50}
        />
        <Image
          className={styles.image}
          src="/contacts/instagram.svg"
          alt="instagram"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.contacts}>
        <ul>
          <li className={styles.contacts_item}>
            <h4>Ми допоможемо</h4>
            <a className={styles.contacts_item_link} href="mailto:mind.lab.hub@gmail.com">
              <MailIcon />
              <span>пошта</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4>Ми відповімо</h4>
            <a className={styles.contacts_item_link} href="https://t.me/+Q8t3dkMH84hiYmNi">
              <TelegramIcon />
              <span>телеграм</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4>Ми поговоримо</h4>
            <a className={styles.contacts_item_link} href="/">
              <PhoneIcon />
              <span>телефон</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
