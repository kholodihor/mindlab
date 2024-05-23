'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'
import CoursesIcon from './icons/CoursesIcon'
import PartnersIcon from './icons/PartnersIcon'
import SpeakersIcon from './icons/SpeakersIcon'
import TestimonialsIcon from './icons/TestimonialsIcon'
import ContactsIcon from './icons/ContactsIcon'
import DocumentsIcon from './icons/DocumentsIcon'
import LogoutIcon from './icons/LogoutIcon'
import { FaWpforms } from 'react-icons/fa'

const Sidebar = () => {
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState('')

  const isLinkActive = (link: string) => {
    return pathname.split('/').includes(link)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <h2 className={styles.logo_title}>Mind Lab</h2>
        </Link>
        <div className={styles.website}>
          <span className={styles.website_span}>web</span>
          <span className={styles.website_span}>site</span>
        </div>
      </div>
      <ul className={styles.menu}>
        <li
          className={`${isLinkActive('courses') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('courses')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/courses" className={styles.item_link}>
            <CoursesIcon isActive={isLinkActive('courses')} isHovered={isHovered} />
            <span className={styles.item_name}>Курси</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('partners') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('partners')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/partners" className={styles.item_link}>
            <PartnersIcon isActive={isLinkActive('partners')} isHovered={isHovered} />
            <span className={styles.item_name}>Партнери</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('teachers') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('teachers')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/teachers" className={styles.item_link}>
            <SpeakersIcon isActive={isLinkActive('teachers')} isHovered={isHovered} />
            <span className={styles.item_name}>Викладачі</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('testimonials') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('testimonials')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/testimonials" className={styles.item_link}>
            <TestimonialsIcon isActive={isLinkActive('testimonials')} isHovered={isHovered} />
            <span className={styles.item_name}>Відгуки</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('contacts') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('contacts')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/contacts" className={styles.item_link}>
            <ContactsIcon isActive={isLinkActive('contacts')} isHovered={isHovered} />
            <span className={styles.item_name}>Контакти</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('documents') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('documents')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/documents" className={styles.item_link}>
            <DocumentsIcon isActive={isLinkActive('documents')} isHovered={isHovered} />
            <span className={styles.item_name}>Документи</span>
          </Link>
        </li>

        <li
          className={`${isLinkActive('forms') ? styles.active : ''} ${styles.item}`}
          onMouseEnter={() => setIsHovered('forms')}
          onMouseLeave={() => setIsHovered('')}
        >
          <Link href="/admin/forms" className={styles.item_link}>
            <FaWpforms
              className={isLinkActive('forms') || isHovered === 'forms' ? styles.activeIcon : styles.icon}
            />
            <span className={styles.item_name}>Форми</span>
          </Link>
        </li>
      </ul>

      <div className={styles.logout}>
        <button
          className={styles.button}
          onClick={() => signOut({ callbackUrl: '/' })}
          onMouseEnter={() => setIsHovered('logout')}
          onMouseLeave={() => setIsHovered('')}
        >
          <LogoutIcon isHovered={isHovered} />
          <span className={styles.button_name}>Вийти</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
