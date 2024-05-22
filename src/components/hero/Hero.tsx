'use client'
import { useModal } from '@/stores/useModal'
import { useAlert } from '@/stores/useAlert'
import TitleBlock from './title_block/TitleBlock'
import AnimationBlock from './animation_block/AnimationBlock'
import FormModal from '../modals/form_modal/FormModal'
import FeedBackForm from '../feedback/feedback_form/FeedBackForm'
import styles from './Hero.module.css'
import SuccessAlert from '../alerts/success_alert/SuccessAlert'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const { closeModal } = useModal()
  const isAlertOpen = useAlert((state) => state.isAlertOpen)
  const alertType = useAlert((state) => state.alertType)
  const modalType = useModal((state) => state.modalType)
  const isModalOpen = useModal((state) => state.isModalOpen)

  const t = useTranslations('Hero')

  return (
    <section className={`${styles.hero} container`}>
      <TitleBlock />
      <AnimationBlock />
      <p className={styles.paragraph}>{t('subtitle')}</p>
      {isModalOpen && modalType === 'feedback' && (
        <FormModal handleClose={closeModal}>
          <FeedBackForm />
        </FormModal>
      )}
      {isAlertOpen && alertType === 'feedback' && <SuccessAlert />}
    </section>
  )
}

export default Hero
