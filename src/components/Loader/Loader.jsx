import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperClass={styles.spinner}
  />
);

export default Loader;
