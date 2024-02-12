'use client'

import Image from 'next/image'
import { useMediaQuery } from '@react-hook/media-query'
import Lottie from 'lottie-react'
import hero from '@/animations/hero.json'
import RotatingStar from '../shared/rotating_star/RotatingStar'

import styles from './Hero.module.css'
import HeroMobile from './hero_mobile/HeroMobile'
import HeroTablet from './hero_tablet/HeroTablet'

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  const isTablet = useMediaQuery('(max-width: 1279px)')
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isDesktop && (
        <div className={`${styles.hero} container`}>
          <div className={styles.title_block}>
            <h1 className={styles.title_block_title}>
              Платформа <br /> твого <br />
              безмежного
              <br />
              розвитку
            </h1>
            <p className={styles.title_block_paragraph}>
              Кайфуй від того, що приносить тобі користь
            </p>
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
          </div>
          <div className={styles.rotating_star}>
            <RotatingStar />
          </div>
          <div className={styles.animation_block}>
            <Lottie animationData={hero} loop={false} />
          </div>
        </div>
      )}
      {isTablet && <HeroTablet />}
      {isMobile && <HeroMobile />}
    </>
  )
}

export default Hero
