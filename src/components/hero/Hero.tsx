'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lottie from 'lottie-react'
import hero from '@/animations/hero.json'

import styles from './Hero.module.css'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
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
        <Image
          width={100}
          height={100}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.rotating_star}
          src="/svg/hero/rotating_star.svg"
          alt="Отримати консультацію"
        />
        {isHovered ? (
          <Image
            width={85}
            height={85}
            className={styles.smile}
            src="/svg/hero/smile2.svg"
            alt="smile"
          />
        ) : (
          <Image
            width={85}
            height={85}
            className={styles.smile}
            src="/svg/hero/smile.svg"
            alt="smile"
          />
        )}
      </div>
      <div className={styles.animation_block}>
        <Lottie animationData={hero} loop={false} />
      </div>
    </div>
  )
}

export default Hero
