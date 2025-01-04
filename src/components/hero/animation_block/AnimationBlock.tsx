import { useEffect } from 'react'
import { useModal } from '@/stores/useModal'
import { LazyLottie } from '@/components/LazyLottie'
import RotatingStar from '@/components/shared/rotating_star/RotatingStar'
import styles from './AnimationBlock.module.css'

const AnimationBlock = () => {
  const { openModal } = useModal()

  useEffect(() => {
    // Preload the animation JSON
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'fetch'
    link.href = '/animations/hero.json'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  }, [])

  return (
    <div>
      <LazyLottie
        getAnimationData={() => import('@/animations/hero.json')}
        id="hero_animation"
        loop={false}
        className={styles.lottie}
        fallback={<div className={styles.lottie_placeholder} />}
      />
      <div className={styles.rotating_star} onClick={() => openModal('feedback')}>
        <RotatingStar />
      </div>
    </div>
  )
}

export default AnimationBlock
