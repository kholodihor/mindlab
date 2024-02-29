'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useMediaQuery } from '@react-hook/media-query'
import { ITeacherResponse } from '@/types/teachers'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'

import styles from './Slider.module.css'
import 'swiper/css/navigation'
import 'swiper/css'

interface SliderProps {
  teachers: ITeacherResponse[]
}

const Slider = ({ teachers }: SliderProps) => {
  const sliderRef = useRef(null)
  const [amount, setAmount] = useState(0)

  const isLargeScreen = useMediaQuery('(min-width: 1281px)')
  const isMediumScreen = useMediaQuery('(max-width: 1280px)')
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  const isExtraSmallScreen = useMediaQuery('(max-width: 450px)')

  useEffect(() => {
    const getAmountOfSlides = () => {
      if (isMediumScreen) {
        setAmount(3)
      }
      if (isSmallScreen) {
        setAmount(2)
      }
      if (isLargeScreen) {
        setAmount(4)
      }
      if (isExtraSmallScreen) {
        setAmount(1)
      }
    }
    getAmountOfSlides()
  }, [isMediumScreen, isSmallScreen, isLargeScreen, isExtraSmallScreen])

  const handlePrev = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slidePrev()
    }
  }
  const handleNext = () => {
    if (sliderRef && sliderRef.current) {
      ;(sliderRef.current as any).slideNext()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.swiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={amount}
          loop={true}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            ;(sliderRef.current as any) = swiper
          }}
        >
          {teachers &&
            Array.isArray(teachers) &&
            teachers.map((teacher, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Link href={`teachers/${teacher.id}`}>
                  <TeacherCard teacher={teacher} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navbtn}>
          <Image
            width={24}
            height={24}
            src="/svg/green_arrow.svg"
            alt="previous slide"
            className={styles.arrow}
          />
        </button>
        <button onClick={handleNext} className={styles.navbtn}>
          <Image
            width={24}
            height={24}
            src="/svg/green_arrow.svg"
            alt="next slide"
            className={styles.arrow}
          />
        </button>
      </div>
    </div>
  )
}

export default Slider
