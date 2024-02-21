import React from 'react';
import styles from '../styles/BlockSection.module.css';

const BlockSection = ({ title }) => {
  return (
    <div className={styles['block-section']}>
      <h2>{title}</h2>
    </div>
  );
};

export default BlockSection;