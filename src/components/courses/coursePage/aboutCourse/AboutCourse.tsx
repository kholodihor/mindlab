'use client'

import { coursesPage } from '@/data/courses'
import Lottie from 'lottie-react'
import racket from '@/animations/rocket.json'
// import { useModal } from '@/stores/useModal'
import css from '../aboutCourse/AboutCourse.module.css'
import TimeIcon from '@/components/icons/TimeIcon'
import PriceIcon from '@/components/icons/PriceIcon'
import SeatIcon from '@/components/icons/SeatIcon'
// import FormModal from '@/components/modals/form_modal/FormModal'
// import PreRegisterForm from '../preregister_form/PreRegisterForm'
import Link from 'next/link'
import { useTranslations } from 'next-intl'


const AboutCourse = ({ params }: { params: { course: string } }) => {
  // const { openModal, closeModal } = useModal()
  // const isModalOpen = useModal((state) => state.isModalOpen)
  // const modalType = useModal((state) => state.modalType)

  const currentCourse = coursesPage.find(({ name }) => name === params.course)
const t = useTranslations("Courses")
  return (
    <section>
      <div className={css.about__container}>
        <div className={css.about__leftSide}>
          <h2 className={css.title}>{currentCourse?.title}</h2>
          <p className={css.description}>{t(currentCourse?.description)}</p>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfjVoBGLFsO1IDd3mDxnD6vhJmwuINC9sxbcKkWBxHMtcFInA/viewform' rel="noopener noreferrer"
                  target="_blank" className={css.btn}>
            {t("signup")}
          </Link>
        </div>
        <div className={css.about__rightSide}>
          <div className={`${css.about__wrapper} ${css.wrapper__time}`}>
            <TimeIcon />
            <p className={css.text}>{t(currentCourse?.time.date)}</p>
            <p className={css.timeText}>{t("time.text")} {t(currentCourse?.time.duration)}</p>
            <p>{t("time.lecture")}</p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__price}`}>
            <PriceIcon />
            <p className={`${css.text} ${css.seattext}`}>{currentCourse?.price.monthly} {t("price.price")}</p>
            <p className={css.timeText}>{t("price.fullprice")}</p>
            <p>{currentCourse?.price.monthly}{t("price.monthlyprice")}</p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__seat}`}>
            <SeatIcon />
            <p className={css.text__seat}>{currentCourse?.seat} {t("seat")}</p>
          </div>
        </div>
      </div>
      <Lottie animationData={racket} loop={false} />
      {/* {isModalOpen && modalType === 'register' && (
        <FormModal handleClose={closeModal}>
          <PreRegisterForm />
        </FormModal>
      )} */}
    </section>
  )
}

export default AboutCourse
