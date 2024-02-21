import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../styles/MyTabs.module.css'; // Import your CSS module

const MyTabs = () => {
  return (
    <Tabs className={styles['react-tabs']}>
      <TabList className={styles['react-tabs__tab-list']}>
        <Tab className={styles['react-tabs__tab']}>Tab 1</Tab>
        <Tab className={styles['react-tabs__tab']}>Tab 2</Tab>
        <Tab className={styles['react-tabs__tab']}>Tab 3</Tab>
      </TabList>

      <TabPanel className={styles['react-tabs__tab-panel']}>
        <p>Content for Tab 1 goes here.</p>
      </TabPanel>
      <TabPanel className={styles['react-tabs__tab-panel']}>
        <p>Content for Tab 2 goes here.</p>
      </TabPanel>
      <TabPanel className={styles['react-tabs__tab-panel']}>
        <p>Content for Tab 3 goes here.</p>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;