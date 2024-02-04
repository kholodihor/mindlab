'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { reviews } from '@/data/reviews'
import { useTestimonials } from '@/hooks/swr/useTestimonials'

import TestimonialCard from './testimonial_card/TestimonialCard'
import MainButton from '../ui/main_button/MainButton'
import FormModal from '../modals/form_modal/FormModal'
import TestimonialForm from './testimonial_form/TestimonialForm'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const { GetTestimonials } = useTestimonials()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: testimonials } = GetTestimonials()

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
        <MainButton title="Залишити коментар" handleAction={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <FormModal handleClose={() => setIsModalOpen(false)}>
          <TestimonialForm />
        </FormModal>
      )}
      <Image width={200} height={200} src="/reviews/comet.svg" alt="" className={styles.comet} />
    </div>
  )
}

export default Testimonials
