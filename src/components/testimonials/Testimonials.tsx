'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { reviews } from '@/data/reviews'

import TestimonialCard from './testimonial_card/TestimonialCard'
import MainButton from '../ui/main_button/MainButton'

import styles from './Testimonials.module.css'

import axios from 'axios'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get('/api/testimonials')
      setTestimonials(response.data)
    }
    getTestimonials()
  }, [])

  console.log(testimonials)

  return (
    <div className={styles.reviews_container}>
      <h1 className={styles.reviews_title}>
        Гайс, подивіться, <Image width={50} height={50} src="/reviews/look.svg" alt="eyes" /> що про
        нас пишуть:
      </h1>
      <Swiper
        speed={4000}
        spaceBetween={40}
        slidesPerView={5}
        mousewheel={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className={styles.swiper}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.comments_block}>
        <p className={styles.comments_block_paragraph}>
          Ти в захваті від нашої платформи?
          <br /> Маєш свої коменти?
          <br /> Пиши відгук, не соромся! Ми завжди раді фідбекам!
        </p>
        <MainButton title="Залишити коментар" />
      </div>
      <Image width={200} height={200} src="/reviews/comet.svg" alt="" className={styles.comet} />
    </div>
  )
}

export default Testimonials
