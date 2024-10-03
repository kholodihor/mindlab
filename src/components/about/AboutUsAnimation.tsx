'use client'

import { useLocale } from 'next-intl'
import { useWindowScrollY } from '@/hooks/useWindowScrollY'
import { LazyLottie } from '@/components/LazyLottie'

type AboutUsAnimationProps = {
  aboutRef: React.RefObject<HTMLDivElement>
}

const divisionFactor = 4

const AboutUsAnimation: React.FC<AboutUsAnimationProps> = ({ aboutRef }) => {
  const currentLanguage = useLocale()
  const { scrollY } = useWindowScrollY()
  const aboutPosition = aboutRef.current
  const startPlayPosition = (aboutPosition?.offsetTop ?? 0) / divisionFactor

  return (
    <>
      {scrollY >= startPlayPosition &&
        (currentLanguage === 'ua' ? (
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
