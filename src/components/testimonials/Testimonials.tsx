'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import { useTestimonials } from '@/hooks/swr/useTestimonials'

import TestimonialCard from './testimonial_card/TestimonialCard'
import MainButton from '../ui/main_button/MainButton'
import FormModal from '../modals/form_modal/FormModal'
import TestimonialForm from './testimonial_form/TestimonialForm'
import styles from './Testimonials.module.css'
import { useTranslations } from 'next-intl'
import TestimonialsAlert from '../alerts/testimonials_alert/TestimonialsAlert'

const Testimonials = () => {
  const { testimonials } = useTestimonials()
  const { openModal, closeModal } = useModal()

  const isModalOpen = useModal((state) => state.isModalOpen)
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const modalType = useModal((state) => state.modalType)
  const alertType = useAlert((state) => state.alertType)
  const t = useTranslations('Testimonials')

  return (
    <section id="testimonials" className={styles.reviews_container}>
      <h1 className={`${styles.reviews_title} container`}>
        {t('title')}{' '}
        <Image width={46} height={40} src="/reviews/look.svg" alt="eyes" className={styles.img} />
        <span className={styles.spanTitle}>{t('spanTitle')}</span>
      </h1>
      <Swiper
        speed={4000}
        spaceBetween={20}
        slidesPerView={'auto'}
        mousewheel={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className={styles.swiper}
      >
        {testimonials?.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <TestimonialCard review={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.comments_block} container`}>
        <p className={styles.comments_block_paragraph}>
          {t('text')}
          <br /> {t('comenth')}
          <br /> {t('feedback')}
        </p>
        <MainButton title={t('btn')} handleAction={() => openModal('testimonial')} />
      </div>
      {isModalOpen && modalType === 'testimonial' && (
        <FormModal handleClose={closeModal}>
          <TestimonialForm />
        </FormModal>
      )}
      {isAlertOpen && alertType === 'testimonial' && <TestimonialsAlert />}
      <Image width={200} height={200} src="/reviews/comet.svg" alt="" className={styles.comet} />
    </section>
  )
}

export default Testimonials
