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
import LanguageSwitcher from '../LocalSwitcher'
import { useTranslations } from 'next-intl'

type MobileMenuProps = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const t = useTranslations()
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_header}>
        <h2 className={styles.menu_title}>{t("Menu.menu")}</h2>
        <div onClick={onClose}>
          <CloseIconXL />
        </div>
      </div>
      <nav className={styles.menu_nav}>
        <ul>
          <li className={styles.header_nav_item}>
            <a href="#courses">{t("Menu.courses")}</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">{t("Menu.speakers")}</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">{t("Menu.partners")}</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">{t("Menu.parents")}</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">{t("Menu.contacts")}</a>
          </li>
          <li className={styles.header_nav_item}>
          <LanguageSwitcher />
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
              {t("Menu.chat")}
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
            <h4>{t('Footer.help')}</h4>
            <a className={styles.contacts_item_link} href="mailto:mind.lab.hub@gmail.com">
              <MailIcon />
              <span>{t("Footer.mail")}</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4>{t("Footer.answer")}</h4>
            <a className={styles.contacts_item_link} href="https://t.me/+Q8t3dkMH84hiYmNi">
              <TelegramIcon />
              <span>{t("Footer.telegram")}</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4>{t("Footer.talk")}</h4>
            <a className={styles.contacts_item_link} href="/">
              <PhoneIcon />
              <span>{t("Footer.phone")}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
