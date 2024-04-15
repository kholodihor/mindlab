import React from 'react';
import Image from 'next/image'

import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, image, text }) => {
  return (
    <div className={styles.testimonial_card}>
      <div>
        <Image width={50} height={50} alt={name} src={image} />
        <h3>{name}</h3>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default TestimonialCard;
