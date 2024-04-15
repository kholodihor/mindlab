import React from 'react';
import TestimonialCard from './testimonial_card/TestimonialCard';
import PageTitle from '../shared/pageTitle/PageTitle';
import { reviews } from '@/data/reviews';
import styles from './Testimonials.module.css';


const Testimonials = () => {
  return (
    <>
      <PageTitle title='Відгуки' isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} />
      <main className={styles.main_content}>
        <div className={styles.wrapper}>
          <ul className={styles.testimonials}>
            {
              reviews.map((review, idx) => {
                return (
                  <li key={idx} className={styles.testimonial_item}>
                    <TestimonialCard name={review.name} image={review.image} text={review.text} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </>

  )

}

export default Testimonials
