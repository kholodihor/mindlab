'use client'

import { coursesPage } from '@/data/courses'
import Lottie from 'lottie-react'
import racket from '@/animations/rocket.json'
import { useModal } from '@/stores/useModal'
import css from '../aboutCourse/AboutCourse.module.css'
import TimeIcon from '@/components/icons/TimeIcon'
import PriceIcon from '@/components/icons/PriceIcon'
import SeatIcon from '@/components/icons/SeatIcon'
import FormModal from '@/components/modals/form_modal/FormModal'
import PreRegisterForm from '../preregister_form/PreRegisterForm'

const AboutCourse = ({ params }: { params: { course: string } }) => {
  const { openModal, closeModal } = useModal()
  const isModalOpen = useModal((state) => state.isModalOpen)
  const modalType = useModal((state) => state.modalType)

  const currentCourse = coursesPage.find(({ name }) => name === params.course)

  return (
    <section>
      <div className={css.about__container}>
        <div className={css.about__leftSide}>
          <h2 className={css.title}>{currentCourse?.title}</h2>
          <p className={css.description}>{currentCourse?.description}</p>
          <button type="button" onClick={() => openModal('register')} className={css.btn}>
            Зареєструватися
          </button>
        </div>
        <div className={css.about__rightSide}>
          <div className={`${css.about__wrapper} ${css.wrapper__time}`}>
            <TimeIcon />
            <p className={css.text}>{currentCourse?.time.date}</p>
            <p className={css.timeText}>Курс триває {currentCourse?.time.duration}</p>
            <p>Відео та онлайн лекції</p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__price}`}>
            <PriceIcon />
            <p className={`${css.text} ${css.seattext}`}>{currentCourse?.price.monthly} грн/міс.</p>
            <p className={css.timeText}>1200 грн при полвній оплаті курсу</p>
            <p>{currentCourse?.price.monthly} грн/міс. при оплаті частинами</p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__seat}`}>
            <SeatIcon />
            <p className={css.text__seat}>{currentCourse?.seat} місць</p>
          </div>
        </div>
      </div>
      <Lottie animationData={racket} loop={false} />
      {isModalOpen && modalType === 'register' && (
        <FormModal handleClose={closeModal}>
          <PreRegisterForm />
        </FormModal>
      )}
    </section>
  )
}

export default AboutCourse
