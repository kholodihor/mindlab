'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useWidth } from '@/hooks/useWidth'
import { useContacts } from '@/hooks/swr/useContacts'
import { useModal } from '@/stores/useModal'
import Link from 'next/link'
import Burger from '../icons/Burger'
import Lottie from 'lottie-react'
import chatbot_default from '@/animations/сhatbot_default.json'
import chatbot_hover from '@/animations/chatbot_hover.json'
import Logo from './logo/Logo'
import LanguageSwitcher from './LocaleSwitcher'
import MenuModal from '../modals/menuModal/MenuModal'
import styles from './Header.module.css'

const Header = () => {
  const t = useTranslations('Menu')
  const [isHovered, setIsHovered] = useState(false)
  const currentWidth = useWidth()
  const { contacts } = useContacts()
  const locale = useLocale()

  const { openModal, closeModal } = useModal()
  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.header_logo}>
          <Logo />
        </div>
        <nav className={styles.header_nav}>
          <ul>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#courses`}>{t('courses')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#teachers`}>{t('speakers')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#partners`}>{t('partners')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#parents`}>{t('parents')}</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href={`/${locale}#contacts`}>{t('contacts')}</Link>
            </li>
          </ul>
          {currentWidth >= 1024 && <LanguageSwitcher />}
          <a href={contacts ? contacts[0].telegram : ''} target="_blank">
            <Lottie
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animationData={isHovered ? chatbot_hover : chatbot_default}
              loop={true}
              className={styles.lottie}
            />
          </a>
          <div className={styles.header_burger} onClick={() => openModal('mobmenu')}>
            <Burger />
          </div>
        </nav>
        {isModalOpen && modalType === 'mobmenu' && <MenuModal handleClose={closeModal} />}
      </div>
    </header>
  )
}

export default Header
