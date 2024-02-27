import React from 'react'
import styles from './Contacts.module.css'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section id="contacts" className={styles.wrapper}>
      <h2 className={styles.title}>Давай залишатись на зв’язку</h2>
      <p className={styles.paragraph}>
        Слідкуй за нами в{' '}
        <a
          href="https://www.instagram.com/mind.lab_hub?igsh=bWl3dGt5Njdwd3Fk&utm_source=qr"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className={styles.image}
            src="/contacts/instagram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        додавайся в друзі в{' '}
        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
          <Image
            className={styles.image}
            src="/contacts/facebook.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
      </p>
      <p className={styles.paragraph}>
        Пиши нам в{' '}
        <a href="https://t.me/+Q8t3dkMH84hiYmNi" rel="noopener noreferrer" target="_blank">
          {' '}
          <Image
            className={styles.image}
            src="/contacts/telegram.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>
        та{' '}
        <a href="mailto:mind.lab.hub@gmail.com">
          {' '}
          <Image
            className={styles.image}
            src="/contacts/mail.svg"
            alt="instagram"
            width={50}
            height={50}
          />
        </a>{' '}
        - ми обов’язково відповімо.
      </p>
    </section>
  )
}

export default Contacts
