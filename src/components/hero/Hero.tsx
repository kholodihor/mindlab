'use client'

import Image from 'next/image'
import Lottie from 'lottie-react'
import hero from '@/animations/hero.json'
import RotatingStar from '../shared/rotating_star/RotatingStar'

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.title_block}>
        <h1 className={styles.title_block_title}>
          Платформа <br /> твого <br />
          безмежного
          <br />
          розвитку
        </h1>
        <p className={styles.title_block_paragraph}>Кайфуй від того, що приносить тобі користь</p>
        <Image
          width={200}
          height={200}
          className={styles.star_green}
          src="/svg/hero/star_green.svg"
          alt=""
        />
        <Image
          width={120}
          height={120}
          className={styles.star_violet}
          src="/svg/hero/star_violet.svg"
          alt=""
        />
        <div className={styles.rotating_star}>
          <RotatingStar />
        </div>
      </div>
      <div className={styles.animation_block}>
        <Lottie animationData={hero} loop={false} />
      </div>
    </div>
  )
}

export default Hero
