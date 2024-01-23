import styles from './MainButton.module.css';

interface MainButtonProps {
  title: string;
}

const MainButton = ({ title }: MainButtonProps) => {
  return <button className={styles.button}>{title}</button>;
};

export default MainButton;
