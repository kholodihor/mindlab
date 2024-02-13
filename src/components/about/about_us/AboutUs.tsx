import Hands from '@/components/icons/Hands'
import React, { FC } from 'react'
import styles from '../About.module.css'

const AboutUs: FC = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.main_goals}>
        <p>
          <span className={styles.text_highlight}>Наша мета</span> - створення інноваційного і
          безпечного осередку для розвитку, навчання та взаємодії.
        </p>
        <p>
          <span className={styles.text_highlight}>Ми прагнемо</span> надати молоді та обдарованій
          генерації можливість здобувати знання, збирати натхнення, знаходити власний шлях у житті
          та планувати свою кар&lsquo;єру.
        </p>
        <p>
          <span className={styles.text_highlight}>Ми допоможемо</span> тобі розширити свої інтереси
          і відкрити власний потенціал.
        </p>
      </div>
      <p className={styles.main_text}>
        <span>
          Не зволікай,
          <br /> в твоїх руках
        </span>
        <span className={styles.hands_middle}>
          <Hands />
        </span>
        <span> твоє майбутнє!</span>
        <span className={styles.hands_end}>
          <Hands />
        </span>
      </p>
      <div className={styles.secondary_goals}>
        <p>
          Тут ти 100 % знайдеш друзів, отримаєш крутий експірієнс і нові знання, які зможеш одразу
          випробувати в реальному житті!
        </p>
        <p>
          Навчання і розвиток мають приносити тобі задоволення - ми не змушуємо, а надаємо
          можливість розвиватися.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
