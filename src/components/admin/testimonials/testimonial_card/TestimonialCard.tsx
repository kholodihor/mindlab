import React from 'react';
import Image from 'next/image';
import EditIcon from '../../shared/icons/EditIcon';
import DeleteIcon from '../../shared/icons/DeleteIcon';

import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, image, text }) => {
  return (
    <div className={styles.testimonial_card}>
      <header className={styles.testimonial_header}>
        <Image width={50} height={50} alt={name} src={image} />
        <h3 className={styles.testimonial_name}>{name}</h3>
      </header>
      <div className={styles.testimonial_text}>{text}</div>
      <div className={styles.button_block}>
        <button type='button' className={styles.button_edit}>
          <EditIcon />
        </button>
        <button type='button' className={styles.button_delete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  )
}

export default TestimonialCard;
