'use client'
import React, { useState } from 'react'
import styles from '../About.module.css'
import Card from '../card/Card'
import Lottie from 'lottie-react'
import pulse from '@/animations/puls.json'

const BoostEngCard = () => {
  const ENG_TEST_URL = '/' // should be add later
  const [isPulseHovered, setIsPulseHovered] = useState(false)

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

  return (
    <Card
      title="Прокачай англійську"
      description={boostEngCardDesc}
      url={ENG_TEST_URL}
      text="Визначити рівень англійської"
      hoverHandler={hoverPulseHandler}
    >
      {isPulseHovered ? (
        <div className={styles.pulse}>
          <Lottie animationData={pulse} />
        </div>
      ) : null}
    </Card>
  )
}

export default BoostEngCard
