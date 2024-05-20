import Avatar from 'react-avatar'
import { getRandomColor } from '@/helpers/getRandomColor'
import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ review }: any) => {
 
  return (
    <div className={styles.review_card}>
      <div className={styles.review_card_header}>
        <Avatar round={true} size={'40px'} color={getRandomColor()} name={review.name} />
        <span className={styles.review_card_name}>{review.name}</span>
      </div>
      <div className={styles.review_card_body}>
        <p className={styles.review_card_body_paragraph}>{review.message}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
