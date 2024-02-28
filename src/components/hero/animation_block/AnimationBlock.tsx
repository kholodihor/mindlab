import Lottie from 'lottie-react'
import { useModal } from '@/stores/useModal'
//import hero from '@/animations/hero.json'
import contentAnimation from '@/animations/hero.json'
import RotatingStar from '@/components/shared/rotating_star/RotatingStar'
import styles from './AnimationBlock.module.css'

const AnimationBlock = () => {
  const { openModal } = useModal()

  return (
    <div className={styles.animation_block}>
      <Lottie animationData={contentAnimation} loop={false} className={styles.lottie} />
      <div className={styles.rotating_star} onClick={() => openModal('feedback')}>
        <RotatingStar />
      </div>
    </div>
  )
}

export default AnimationBlock
