"use client";
import styles from './PageTitle.module.css'
import AddButton from '../addButton/AddButton';
import PasswordButton from '../settingsButton/PasswordButton';

type PageTitleProps = {
  title: string,
  isAddButtonDisplayed: boolean,
  isSettingsButtonDisplayed: boolean
}

const PageTitle = ({ title, isAddButtonDisplayed, isSettingsButtonDisplayed }: PageTitleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.button_container}>
        {isAddButtonDisplayed && <AddButton text={"text text"} handleClick={() => { }} />}

        {isSettingsButtonDisplayed && <PasswordButton handleClick={() => { }} />}
      </div>
    </div>
  )
}

export default PageTitle;
