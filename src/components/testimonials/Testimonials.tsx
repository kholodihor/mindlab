'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { reviews } from '@/data/reviews'
import { useModal } from '@/stores/useModal'
import { useMediaQuery } from '@react-hook/media-query'
import { useTestimonials } from '@/hooks/swr/useTestimonials'

import TestimonialCard from './testimonial_card/TestimonialCard'
import MainButton from '../ui/main_button/MainButton'
import FormModal from '../modals/form_modal/FormModal'
import TestimonialForm from './testimonial_form/TestimonialForm'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [amount, setAmount] = useState(0)
  const { testimonials } = useTestimonials()
  const { openModal, closeModal } = useModal()

  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)

  const isLargeScreen = useMediaQuery('(min-width: 1281px)')
  const isMediumScreen = useMediaQuery('(max-width: 1280px)')
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  const isExtraSmallScreen = useMediaQuery('(max-width: 450px)')

  console.log(testimonials)

  useEffect(() => {
    const getAmountOfSlides = () => {
      if (isLargeScreen) {
        setAmount(5)
      }
      if (isMediumScreen) {
        setAmount(3)
      }
      if (isSmallScreen) {
        setAmount(2)
      }
      if (isExtraSmallScreen) {
        setAmount(1)
      }
    }
    getAmountOfSlides()
  }, [isMediumScreen, isSmallScreen, isLargeScreen, isExtraSmallScreen])

  return (
    <section id="testimonials" className={styles.reviews_container}>
      <h1 className={styles.reviews_title}>
        Гайс, подивіться, <Image width={50} height={50} src="/reviews/look.svg" alt="eyes" /> що про
        нас пишуть:
      </h1>
      <Swiper
        speed={4000}
        spaceBetween={40}
        slidesPerView={amount}
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
          <SwiperSlide key={index} className={styles.slide}>
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
        <MainButton title="Залишити коментар" handleAction={() => openModal('testimonial')} />
      </div>
      {isModalOpen && modalType === 'testimonial' && (
        <FormModal handleClose={closeModal}>
          <TestimonialForm />
        </FormModal>
      )}
      <Image width={200} height={200} src="/reviews/comet.svg" alt="" className={styles.comet} />
    </section>
  )
}

export default Testimonials
