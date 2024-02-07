'use client'
import React, { useState } from 'react'
import Card from '../card/Card'
import Wow from '@/components/shared/wow/Wow'
import styles from '../About.module.css'

const BonusCard = () => {
  const [isWowHovered, setIsWowHovered] = useState(false)
  const REGISTER_URL = 'https://forms.gle/wxX5LyYEsLupyKg68'

  const bonusCardDesc = (
    <ul className={styles.description}>
      <li className={styles.description_item}>
        Знижка до 10%{' '}
        <span className={styles.description_text}>на курс при попередній реєстрації</span>
      </li>
      <li className={styles.description_item}>
        Безкоштовне заняття
        <span className={styles.description_text}>
          {' '}
          по одному з курсів на вибір при попердній реєстрації
        </span>
      </li>
      <li className={styles.description_item}>
        Повний супровід
        <span className={styles.description_text}>
          {' '}
          при написанні портфоліо/резюме при попередній реєстрації
        </span>
      </li>
    </ul>
  )

  const hoverWowHandler = () => {
    setIsWowHovered(!isWowHovered)
  }

  return (
    <Card
      title="Отримай бонуси"
      description={bonusCardDesc}
      url={REGISTER_URL}
      text="Отримати бонуси"
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
