'use client'

import React, { FC } from 'react'
import { useLocale } from 'next-intl'
import { LazyLottie } from '@/components/LazyLottie'
import { useWindowScrollY } from './useWindowScrollY'

type AboutUsAnimationProps = {
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
          <LazyLottie
            getAnimationData={() => import('@/animations/about_us.json')}
            loop={false}
            id="about_us"
          />
        ) : (
          <LazyLottie
            getAnimationData={() => import('@/animations/about_us_eng.json')}
            loop={false}
            id="about_us_eng"
          />
        ))}
    </>
  )
}

export default AboutUsAnimation
