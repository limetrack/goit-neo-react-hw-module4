import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <div className={styles.loadMoreContainer}>
    <button className={styles.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
