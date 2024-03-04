'use client'

import { FC, useRef } from 'react'
import styles from './About.module.css'

import AboutUsAnimation from './AboutUsAnimation'
import BonusCard from './bonus_card/BonusCard'
import BoostEngCard from './boost_eng_card/BoostEngCard'
import AboutUs from './about_us/AboutUs'

const About: FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  
  return (
    <section className={`${styles.about} container`} ref={aboutRef}>
      <div className={styles.about_content}>
        <AboutUsAnimation aboutRef={aboutRef} />
      </div>
      <AboutUs />
      <div className={styles.about_cards}>
        <BonusCard />
        <BoostEngCard />
      </div>
    </section>
  )
}

export default About
