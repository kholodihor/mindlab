'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { reviews } from '@/data/reviews'
import { useModal } from '@/stores/useModal'
import { useTestimonials } from '@/hooks/swr/useTestimonials'

import TestimonialCard from './testimonial_card/TestimonialCard'
import MainButton from '../ui/main_button/MainButton'
import FormModal from '../modals/form_modal/FormModal'
import TestimonialForm from './testimonial_form/TestimonialForm'
import styles from './Testimonials.module.css'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
  // const [amount, setAmount] = useState(0)
  const { testimonials } = useTestimonials()
  const { openModal, closeModal } = useModal()

  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)
  const t = useTranslations('Testimonials')
  // const isLargeScreen = useMediaQuery('(min-width: 1281px)')
  // const isMediumScreen = useMediaQuery('(max-width: 1280px)')
  // const isSmallScreen = useMediaQuery('(max-width: 768px)')
  // const isExtraSmallScreen = useMediaQuery('(max-width: 450px)')

  console.log(testimonials)

  // useEffect(() => {
  //   const getAmountOfSlides = () => {
  //     if (isLargeScreen) {
  //       setAmount(5)
  //     }
  //     if (isMediumScreen) {
  //       setAmount(3)
  //     }
  //     if (isSmallScreen) {
  //       setAmount(2)
  //     }
  //     if (isExtraSmallScreen) {
  //       setAmount(1)
  //     }
  //   }
  //   getAmountOfSlides()
  // }, [isMediumScreen, isSmallScreen, isLargeScreen, isExtraSmallScreen])

  return (
    <section id="testimonials" className={styles.reviews_container}>
      <h1 className={`${styles.reviews_title} container`}>
        {t('title')} <Image width={46} height={40} src="/reviews/look.svg" alt="eyes" className={styles.img}/>
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <TestimonialCard review={review} />
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
      <Image width={200} height={200} src="/reviews/comet.svg" alt="" className={styles.comet} />
    </section>
  )
}

export default Testimonials
