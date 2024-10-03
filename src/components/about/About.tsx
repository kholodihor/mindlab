'use client'

import { useRef } from 'react'
import { useForms } from '@/hooks/swr/useForms'
import AboutUs from './about_us/AboutUs'
import BonusCard from './bonus_card/BonusCard'
import BoostEngCard from './boost_eng_card/BoostEngCard'
import AboutUsAnimation from './AboutUsAnimation'
import styles from './About.module.css'

const About: React.FC = () => {
  const { forms } = useForms()
  const aboutRef = useRef<HTMLDivElement>(null)

  const registrationForm =
    forms && forms?.find((form) => form.name.toLowerCase() === 'registration form')
  const placementTestForm =
    forms && forms?.find((form) => form.name.toLowerCase() === 'placement test')

  return (
    <section className={`${styles.about} container`} ref={aboutRef}>
      <div className={styles.about_content}>
        <AboutUsAnimation aboutRef={aboutRef} />
      </div>
      <AboutUs />
      <div className={styles.about_cards}>
        <BonusCard registrationForm={registrationForm} />
        <BoostEngCard placementTestForm={placementTestForm} />
      </div>
    </section>
  )
}

export default About
