import Image from 'next/image'
import styles from './TestimonialCard.module.css'

type TestimonialCardProps = {
  review: {
    image: string
    name: string
    text: string
  }
}

const TestimonialCard = ({ review }: TestimonialCardProps) => {
  return (
    <div className={styles.review_card}>
      <div className={styles.review_card_header}>
        <Image
          width={50}
          height={50}
          src={review.image}
          className={styles.review_card_image}
          alt={review.name}
        />
        <span className={styles.review_card_name}>{review.name}</span>
      </div>
      <div className={styles.review_card_body}>
        <p className={styles.review_card_body_paragraph}>{review.text}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
