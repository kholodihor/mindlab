'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'
import chatbot_default from '@/animations/сhatbot_default.json'
import chatbot_hover from '@/animations/chatbot_hover.json'
import styles from './MobileMenu.module.css'
import CloseIconXL from '@/components/icons/CloseIconXL'
import MailIcon from '@/components/icons/MailIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import TelegramIconXL from '@/components/icons/TelegramIconXL'
import LanguageSwitcher from '../LocalSwitcher'
import { useLocale, useTranslations } from 'next-intl'
import { useWidth } from '@/hooks/useWidth'
import TelegramIcon from '@/components/icons/TelegramIcon'
import MailIconXL from '@/components/icons/MailIconXL'
import PhoneIconXL from '@/components/icons/PhoneIconXL'

type MobileMenuProps = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const t = useTranslations()
  const currentWidth = useWidth();
  const locale = useLocale()
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_header}>
        <h2 className={styles.menu_title}>{t('Menu.menu')}</h2>
        <div onClick={onClose} className={styles.icon}>
          <CloseIconXL />
        </div>
      </div>
      <nav className={styles.menu_nav}>
        <ul className={styles.menu_list}>
          <li  className={styles.header_nav_item}>
            <Link href={`/${locale}#courses`} onClick={onClose} className={styles.header_nav_item_link}>
              {t('Menu.courses')}
            </Link>
          </li>
          <li  className={styles.header_nav_item}>
            <Link href={`/${locale}#teachers`} onClick={onClose} className={styles.header_nav_item_link}>
              {t('Menu.speakers')}
            </Link>
          </li>
          <li  className={styles.header_nav_item}>
            <Link href={`/${locale}#partners`} onClick={onClose} className={styles.header_nav_item_link}>
              {t('Menu.partners')}
            </Link>
          </li>
          <li className={styles.header_nav_item}>
            <Link href={`/${locale}#parents`} onClick={onClose} className={styles.header_nav_item_link}>
              {t('Menu.parents')}
            </Link>
          </li>
          <li onClick={onClose} className={styles.header_nav_item}>
            <LanguageSwitcher />
          </li>
          <li className={styles.header_nav_item}>
            <a
              href="https://t.me/honeyhell_bot"
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={styles.header_nav_item_button}
            >
              <Lottie
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animationData={isHovered ? chatbot_hover : chatbot_default}
                loop={true}
                className={styles.lottie}
              />
              {t('Menu.chat')}
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/mind.lab_hub?igsh=bWl3dGt5Njdwd3Fk&utm_source=qr"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.social_link}
        >
          <Image src="/svg/footer/instagram.svg" alt="instagram" width={40} height={40} />
        </a>
        <a
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.social_link}
        >
          <Image src="/svg/footer/facebook.svg" alt="facebook" width={40} height={40} />
        </a>
      </div>
      <div className={styles.contacts}>
        <ul className={styles.contacts_list}>
          <li className={styles.contacts_item}>
            <h4 className={styles.contacts_item_title}>{t('Footer.help')}</h4>
            <a className={styles.contacts_item_link} href="mailto:mind.lab.hub@gmail.com">
              {currentWidth <430 ? <MailIconXL /> : <MailIcon/>}
              <span className={styles.contacts_item_link_span}>{t('Footer.mail')}</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4 className={styles.contacts_item_title}>{t('Footer.answer')}</h4>
            <a
              className={styles.contacts_item_link}
              href="https://t.me/+Q8t3dkMH84hiYmNi"
              rel="noopener noreferrer"
              target="_blank"
            >
             {currentWidth <430 ? <TelegramIconXL /> : <TelegramIcon />}
              <span className={styles.contacts_item_link_span}>{t('Footer.telegram')}</span>
            </a>
          </li>
          <li className={styles.contacts_item}>
            <h4 className={styles.contacts_item_title}>{t('Footer.talk')}</h4>
            <a className={styles.contacts_item_link} href="tel:6031112298">
            {currentWidth <430 ? <PhoneIconXL /> : <PhoneIcon />}
              <span className={styles.contacts_item_link_span}>{t('Footer.phone')}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
