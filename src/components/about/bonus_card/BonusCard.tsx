'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IForm } from '@/types/forms'
import Card from '../card/Card'
import Wow from '@/components/shared/wow/Wow'
import styles from '../About.module.css'

type BonusCardProps = {
  registrationForm: IForm
}

const BonusCard = ({ registrationForm }: BonusCardProps) => {
  const [isWowHovered, setIsWowHovered] = useState(false)
  const t = useTranslations('About')

  const bonusCardDesc = (
    <ul className={styles.description}>
      <li className={styles.description_item}>
        {t('bonuses.discount')}{' '}
        <span className={styles.description_text}>{t('bonuses.preRegistration')}</span>
      </li>
      <li className={styles.description_item}>
        {t('bonuses.freelesson')}
        <span className={styles.description_text}> {t('bonuses.choice')}</span>
      </li>
      <li className={styles.description_item}>
        {t('bonuses.support')}
        <span className={styles.description_text}> {t('bonuses.portfolio')}</span>
      </li>
    </ul>
  )

  const hoverWowHandler = () => {
    setIsWowHovered(!isWowHovered)
  }

  return (
    <Card
      title={t('bonuses.title')}
      description={bonusCardDesc}
      url={registrationForm ? registrationForm.formLink : ''}
      text={t('bonuses.btn')}
      hoverHandler={hoverWowHandler}
    >
      {isWowHovered ? (
        <div className={styles.wow}>
          <Wow />
        </div>
      ) : null}
    </Card>
  )
}

export default BonusCard
