import { useModal } from '@/stores/useModal'
import { LazyLottie } from '@/components/LazyLottie'
import RotatingStar from '@/components/shared/rotating_star/RotatingStar'
import styles from './AnimationBlock.module.css'

const AnimationBlock = () => {
  const { openModal } = useModal()

  return (
    <div>
      <LazyLottie
        getAnimationData={() => import('@/animations/hero.json')}
        id="hero_animation"
        loop={false}
        className={styles.lottie}
      />
      <div className={styles.rotating_star} onClick={() => openModal('feedback')}>
        <RotatingStar />
      </div>
    </div>
  )
}

export default AnimationBlock
