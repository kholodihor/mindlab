import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Hands from '@/components/icons/Hands'
import styles from '../About.module.css'

const AboutUs: FC = () => {
  const t = useTranslations('About')

  return (
    <div className={styles.about_us}>
      <div className={styles.main_goals}>
        <p>
          <span className={styles.text_highlight}>{t('goals.innovation.boldText')}</span>{' '}
          {t('goals.innovation.text')}
        </p>
        <p>
          <span className={styles.text_highlight}>{t('goals.career.boldText')}</span>{' '}
          {t('goals.career.text')}
        </p>
        <p>
          <span className={styles.text_highlight}>{t('goals.potential.boldText')}</span>{' '}
          {t('goals.potential.text')}
        </p>
      </div>
      <p className={styles.main_text}>
        <span>
          {t('mainText.message')}
          <br className={styles.text_breaker} />
          {t('mainText.hands')}
        </span>
        <span className={styles.hands_middle}>
          <Hands />
        </span>
        <span> {t('mainText.future')}</span>
        <span className={styles.hands_end}>
          <Image src={'/hands.png'} alt="hands" width={61} height={49} />
        </span>
      </p>
      <div className={styles.secondary_goals}>
        <p>{t('secondaryGoals.firstGoal')}</p>
        <p>{t('secondaryGoals.secondGoal')}</p>
      </div>
    </div>
  )
}

export default AboutUs
