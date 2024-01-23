import { FC, ReactNode } from 'react';
import ButtonLink from '@/components/ui/link_button/LinkButton';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: ReactNode;
  url: string;
  text: string;
}

const Card: FC<CardProps> = ({ title, description, url, text }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>{title}</h2>
      {description}
      <ButtonLink url={url} text={text} />
    </div>
  );
};

export default Card;
