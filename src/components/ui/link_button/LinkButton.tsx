import { FC } from 'react';
import styles from './LinkButton.module.css';

interface ButtonLinkProps {
  url: string;
  text: string;
}
const ButtonLink: FC<ButtonLinkProps> = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noreferrer nofollow">
      <button className={styles.button}>{text}</button>
    </a>
  );
};

export default ButtonLink;
