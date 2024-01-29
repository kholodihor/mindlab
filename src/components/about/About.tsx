'use client'

import { FC, useState } from 'react'
import Card from './about_card/Card'
import styles from './About.module.css'
import Lottie from 'lottie-react'
import pulse from '../../animations/puls.json'
import Wow from '../shared/wow/Wow'

const About: FC = () => {
  const REGISTER_URL = 'https://forms.gle/wxX5LyYEsLupyKg68'
  const ENG_TEST_URL = '/' // should be add later
  const [isPulseHovered, setIsPulseHovered] = useState(false)
  const [isWowHovered, setIsWowHovered] = useState(false)

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
  const boostEngCardDesc = (
    <p className={styles.description}>
      <span className={styles.description_text}>
        Ми щиро хочемо, щоб ти щораз покращував свій інгліш, тож подбали, щоб ти міг розвиватися у
        цьому напрямку. <br /> Лови від нас плюшку -{' '}
      </span>
      безкоштовний speaking club{' '}
      <span className={styles.description_text}>
        в кожному курсі! А ще - безкоштовний тест на визначення рівня твоєї англійської
      </span>
    </p>
  )

  const hoverPulseHandler = () => {
    setIsPulseHovered(!isPulseHovered)
  }

  const hoverWowHandler = () => {
    setIsWowHovered(!isWowHovered)
  }
  return (
    <section className={styles.about}>
      <div className={styles.about_cards}>
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
        <Card
          title="Прокачай англійську"
          description={boostEngCardDesc}
          url={ENG_TEST_URL}
          text="Визначити рівень англійської"
          hoverHandler={hoverPulseHandler}
        >
          {isPulseHovered ? (
            <div className={styles.pulse}>
              <Lottie animationData={pulse}></Lottie>
            </div>
          ) : null}
        </Card>
      </div>
      <div className={styles.about_content}>
        <h4 className={styles.about_title}>
          Наша мета - cтворити для тебе крутий простір для розвитку та пізнання
        </h4>
        <p className={styles.about_subtitle}>
          Не зволікай, ти - нова генерація, і в твоїх руках твоє майбутнє!
        </p>
      </div>
    </section>
  )
}

export default About
