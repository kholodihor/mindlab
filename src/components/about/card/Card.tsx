import { FC, ReactNode } from 'react'
import ButtonLink from '@/components/ui/link_button/LinkButton'
import styles from './Card.module.css'

interface CardProps {
  title: string
  description: ReactNode
  url: string
  text: string
  children?: ReactNode
  hoverHandler?: () => void
}

const Card: FC<CardProps> = ({ title, description, url, text, children, hoverHandler }) => {
  return (
    <div className={styles.card} onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <h2 className={styles.card_title}>{title}</h2>
      {description}
      <ButtonLink url={url} text={text} />
      {children}
    </div>
  )
}

export default Card
