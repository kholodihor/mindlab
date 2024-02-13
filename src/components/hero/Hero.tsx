'use client'

import TitleBlock from './title_block/TitleBlock'
import AnimationBlock from './animation_block/AnimationBlock'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <TitleBlock />
      <AnimationBlock />
      <p className={styles.paragraph}>Кайфуй від того, що приносить тобі користь</p>
    </section>
  )
}

export default Hero
