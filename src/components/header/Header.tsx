import styles from './Header.module.css';
import Logo from './logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Logo />
      </div>
      <nav className={styles.header_nav}>
        <ul>
          <li className={styles.header_nav_item}>
            <a href="#courses">Курси</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Викладачі</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Партнери</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Для батьків</a>
          </li>
          <li className={styles.header_nav_item}>
            <a href="#courses">Контакти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
