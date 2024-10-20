import React, { useState } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ data, onClose }) => {
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(prev => !prev);
  };

	const onAfterOpen = () => {
    document.body.style.overflow = 'hidden';
  };

  // Re-enable scrolling when modal closes
  const onRequestClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  return (
    <Modal
      isOpen={!!data}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <div className={styles.modalContent}>
        <img
          className={styles.modalImage}
          src={data.urls.regular}
          alt={data.alt_description}
        />
        <div
          className={classNames(styles.imageInfo, {
            [styles.hidden]: !infoVisible,
          })}
        >
          <div className={styles.author}>Author: {data.user.name}</div>
          <div className={styles.likes}>Likes: {data.likes}</div>
          <div className={styles.description}>
            {data.description || 'No description available'}
          </div>
          <button className={styles.toggleInfoBtn} onClick={toggleInfo}>
            &darr;
          </button>
        </div>
      </div>
      <button
        className={classNames(styles.toggleInfoBtn, {
          [styles.hidden]: infoVisible,
        })}
        onClick={toggleInfo}
      >
        &#9432;
      </button>
    </Modal>
  );
};

export default ImageModal;
