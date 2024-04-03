import styles from './TabButton.module.css'

type TabButtonProps = {
  title: string
  id: number
  selectedTab: number
  onClick: () => void
}

const TabButton = ({ title, id, selectedTab, onClick } : TabButtonProps) => {
  return <li>
          <button className={`${styles.tab_btn} ${id === selectedTab ? styles.active : '' }`} type="button" onClick={onClick}>{title}</button>
        </li>
}

export default TabButton