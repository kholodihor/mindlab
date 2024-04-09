"use client";
import React, { useState, FC } from 'react'
import styles from './TabPanel.module.css'
import TabButton from '../tabButton/TabButton'

type TabPanelProps = {
  tabList: {
    id: number
    title: string
    Component: FC<{ index: number }>;
  }[]
}

const TabPanel = ({ tabList = []} : TabPanelProps) => {
  const defaultSelectedTab = tabList[0].id
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab)
  const panel = tabList.find((tab) => tab.id === selectedTab)

  return <div className={styles.tab_container}>
          <ul className={styles.tab_list}>
            {tabList && tabList.map((tab) => (
              <TabButton
                key={tab.id}
                title={tab.title}
                id={tab.id}
                selectedTab={selectedTab}
                onClick={() => {
                  setSelectedTab(tab.id)
                }}
              />
            ))}
          </ul>
          <div className={styles.tab_content}>
            {panel && <panel.Component index={selectedTab} />}
          </div>
        </div>
}

export default TabPanel