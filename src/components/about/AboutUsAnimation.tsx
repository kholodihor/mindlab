'use client'

import React, { FC } from 'react'
import Lottie from 'lottie-react'
import aboutUs from '@/animations/about_us.json'
import { useWindowScrollY } from './useWindowScrollY'

interface AboutUsAnimationProps {
  aboutRef: React.RefObject<HTMLDivElement>
}

const style = {
  width: '120%',
  height: '120%',
  marginLeft: '-120px'
}
const divisionFactor = 4

const AboutUsAnimation: FC<AboutUsAnimationProps> = ({ aboutRef }) => {
  const { scrollY } = useWindowScrollY()
  const aboutPosition = aboutRef.current
  const startPlayPosition = (aboutPosition?.offsetTop ?? 0) / divisionFactor
  return (
    <>
      {scrollY >= startPlayPosition && (
        <Lottie animationData={aboutUs} style={style} loop={false} />
      )}
    </>
  )
}

export default AboutUsAnimation
