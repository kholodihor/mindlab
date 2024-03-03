'use client'

import React, { FC } from 'react'
import Lottie from 'lottie-react'
import aboutUsUa from '@/animations/about_us.json'
import aboutUsEng from '@/animations/about_us_eng.json'
import { useLocale } from 'next-intl'
import { useWindowScrollY } from './useWindowScrollY'

interface AboutUsAnimationProps {
  aboutRef: React.RefObject<HTMLDivElement>
}

const divisionFactor = 4

const AboutUsAnimation: FC<AboutUsAnimationProps> = ({ aboutRef }) => {
  const { scrollY } = useWindowScrollY()
  const aboutPosition = aboutRef.current
  const startPlayPosition = (aboutPosition?.offsetTop ?? 0) / divisionFactor
  const DEFAULT_LANGUAGE = 'ua'
  const currentLanguage = useLocale()

  return (
    <>
      {scrollY >= startPlayPosition &&
        (currentLanguage === DEFAULT_LANGUAGE ? (
          <Lottie animationData={aboutUsUa} loop={false} />
        ) : (
          <Lottie animationData={aboutUsEng} loop={false} />
        ))}
    </>
  )
}

export default AboutUsAnimation
