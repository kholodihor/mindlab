'use client'

import React, { FC, useEffect } from 'react'
import { useLottie } from 'lottie-react'
import aboutUs from '../../animations/about_us.json'

interface AboutUsAnimationProps {
  isSectionInView: boolean
}

const style = {
  width: '120%',
  height: '120%',
  marginLeft: '-125px'
}

const options = {
  animationData: aboutUs,
  loop: false
}

const AboutUsAnimation: FC<AboutUsAnimationProps> = ({ isSectionInView }) => {
  const { View, play } = useLottie(options, style)
  useEffect(() => {
    if (isSectionInView) {
      play()
    }
  }, [isSectionInView, play])
  return <div>{View}</div>
}

export default AboutUsAnimation
