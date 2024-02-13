import Lottie from 'lottie-react'
import hero from '@/animations/hero.json'
import RotatingStar from '@/components/shared/rotating_star/RotatingStar'
import styles from './AnimationBlock.module.css'

const AnimationBlock = () => {
  return (
    <div className={styles.animation_block}>
      <Lottie animationData={hero} loop={false} />
      <div className={styles.rotating_star}>
        <RotatingStar />
      </div>
    </div>
  )
}

export default AnimationBlock
