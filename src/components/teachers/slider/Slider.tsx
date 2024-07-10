'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ITeacherResponse } from '@/types/teachers'
import ArrowSpeakers from '@/components/icons/ArrowSpeakers'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'

import styles from './Slider.module.css'
import 'swiper/css/navigation'
import 'swiper/css'

interface SliderProps {
  teachers: ITeacherResponse[]
}

const Slider = ({ teachers }: SliderProps) => {
  const sliderRef = useRef(null)

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
          slidesPerView={'auto'}
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
        <button onClick={handlePrev} className={`${styles.navbtn} ${styles.navbtn} `}>
          <ArrowSpeakers />
        </button>
        <button onClick={handleNext} className={`${styles.navbtn} ${styles.navbtn} `}>
          <ArrowSpeakers />
        </button>
      </div>
    </div>
  )
}

export default Slider
