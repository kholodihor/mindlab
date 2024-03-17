import React from 'react'
import styles from './Contacts.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Contacts = () => {
  const t = useTranslations("Contacts")
  return (
    <section id="contacts" className={styles.wrapper}>
      <h2 className={`${styles.title} title`}>{t("title")}</h2>
     
      <p className={styles.paragraph}>
      {t("follow")}{' '}
        <a
          href="https://www.instagram.com/mind.lab_hub?igsh=bWl3dGt5Njdwd3Fk&utm_source=qr"
          rel="noopener noreferrer"
          target="_blank" className={styles.link}
        >
          <Image
            className={styles.image}
            src="/contacts/instagram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        {t("join")}{' '}
        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" className={styles.link}>
          <Image
            className={styles.image}
            src="/contacts/facebook.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
   
        {t("write")}{' '}
        <a href="https://t.me/+Q8t3dkMH84hiYmNi" rel="noopener noreferrer" target="_blank" className={styles.link}>
          {' '}
          <Image
            className={styles.image}
            src="/contacts/telegram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        {t("and")}{' '}
        <a href="mailto:mind.lab.hub@gmail.com" className={styles.link}>
          {' '}
          <Image
            className={styles.image}
            src="/contacts/mail.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>{' '}
        {t("answer")}
      </p>
    </section>
  )
}

export default Contacts
