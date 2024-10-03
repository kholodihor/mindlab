import ButtonLink from '@/components/ui/link_button/LinkButton'
import styles from './Card.module.css'

type CardProps = {
  title: string
  description: React.ReactNode
  url: string
  text: string
  children?: React.ReactNode
  hoverHandler?: () => void
}

const Card: React.FC<CardProps> = ({ title, description, url, text, children, hoverHandler }) => {
  return (
    <div className={styles.card} onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <div className={styles.card_title_container}>
        <h2 className={styles.card_title}>{title}</h2>
      </div>
      {description}
      <ButtonLink url={url} text={text} />
      {children}
    </div>
  )
}

export default Card
