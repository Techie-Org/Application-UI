import React from 'react';
import styles from './styles.scss';

const LoadingSpinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;
