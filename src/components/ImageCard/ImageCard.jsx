import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <div role='button' className={styles.imageCard} onClick={onClick}>
    <img
      className={styles.image}
      src={image.urls.small}
      alt={image.alt_description}
    />
  </div>
);

export default ImageCard;
