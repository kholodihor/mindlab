import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './TitleBlock.module.css'

const TitleBlock = () => {
  const t = useTranslations('Hero')

  return (
    <div className={styles.title_block}>
      <h1 className={styles.title_block_title}>
        {t('title')} <br /> {t('title1')} <br />
        {t('title2')}
        <br />
        {t('title3')}
      </h1>
      <Image
        width={200}
        height={200}
        className={styles.star_green}
        src="/hero/star_green.svg"
        alt=""
      />
      <Image
        width={120}
        height={120}
        className={styles.star_violet}
        src="/hero/star_violet.svg"
        alt=""
      />
    </div>
  )
}

export default TitleBlock
