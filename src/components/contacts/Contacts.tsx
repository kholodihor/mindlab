import React from 'react'
import styles from './Contacts.module.css'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section id="contacts" className={styles.wrapper}>
      <h2 className={styles.title}>Давай залишатись на зв’язку</h2>
      <p className={styles.paragraph}>
        Слідкуй за нами в{' '}
        <Image
          className={styles.image}
          src="/contacts/instagram.svg"
          alt="instagram"
          width={50}
          height={50}
        />
        , додавайся в друзі в{' '}
        <Image
          className={styles.image}
          src="/contacts/facebook.svg"
          alt="instagram"
          width={50}
          height={50}
        />
      </p>
      <p className={styles.paragraph}>
        Пиши нам в{' '}
        <Image
          className={styles.image}
          src="/contacts/telegram.svg"
          alt="instagram"
          width={50}
          height={50}
        />{' '}
        та{' '}
        <Image
          className={styles.image}
          src="/contacts/mail.svg"
          alt="instagram"
          width={50}
          height={50}
        />{' '}
        - ми обов’язково відповімо.
      </p>
    </section>
  )
}

export default Contacts
