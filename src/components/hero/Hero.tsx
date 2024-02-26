'use client'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import TitleBlock from './title_block/TitleBlock'
import AnimationBlock from './animation_block/AnimationBlock'
import FormModal from '../modals/form_modal/FormModal'
import FeedBackForm from '../feedback/feedback_form/FeedBackForm'
import styles from './Hero.module.css'
import SuccessAlert from '../alerts/success_alert/SuccessAlert'

const Hero = () => {
  const { closeModal } = useModal()
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const modalType = useModal((state) => state.modalType)
  const isModalOpen = useModal((state) => state.isModalOpen)

  return (
    <section className={`${styles.hero} container`}>
      <TitleBlock />
      <AnimationBlock />
      <p className={styles.paragraph}>Кайфуй від того, що приносить тобі користь</p>
      {isModalOpen && modalType === 'feedback' && (
        <FormModal handleClose={closeModal}>
          <FeedBackForm />
        </FormModal>
      )}
      {isAlertOpen && <SuccessAlert />}
    </section>
  )
}

export default Hero
