'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
// import { useContacts } from '@/hooks/swr/useContacts'
import styles from './Contacts.module.css'
import { IContact } from '@/types/contacts'

const Contacts = ({ contacts }: { contacts: IContact[] }) => {
  const t = useTranslations('Contacts')
  // const { contacts } = useContacts()

  return (
    <section id="contacts" className={styles.wrapper}>
      <h2 className={`${styles.title} title`}>{t('title')}</h2>

      <p className={styles.paragraph}>
        {t('follow')}{' '}
        <a
          href={contacts ? contacts?.[0].instagram : ''}
          rel="noopener noreferrer"
          target="_blank"
          className={styles.link}
        >
          <Image
            className={styles.image}
            src="/contacts/instagram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        {t('join')}{' '}
        <a
          href={contacts ? contacts?.[0].facebook : ''}
          rel="noopener noreferrer"
          target="_blank"
          className={styles.link}
        >
          <Image
            className={styles.image}
            src="/contacts/facebook.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        {t('write')}{' '}
        <a
          href={contacts ? contacts?.[0].telegram : ''}
          rel="noopener noreferrer"
          target="_blank"
          className={styles.link}
        >
          {' '}
          <Image
            className={styles.image}
            src="/contacts/telegram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        {t('and')}{' '}
        <a href={`mailto:${contacts ? contacts?.[0].email : ''}`} className={styles.link}>
          {' '}
          <Image
            className={styles.image}
            src="/contacts/mail.svg"
            alt="email"
            width={50}
            height={50}
          />
        </a>{' '}
        {t('answer')}
      </p>
    </section>
  )
}

export default Contacts
