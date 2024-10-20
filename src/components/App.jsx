import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImagesAPI } from '../api/fetchImages';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import styles from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const fetchImages = async (searchQuery, page) => {
    setIsLoading(true);

    try {
      const result = await fetchImagesAPI(searchQuery, page);

      setImages(prevImages => [...prevImages, ...result]);
    } catch (err) {
      setError('Failed to load images');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = searchQuery => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }

    setQuery(searchQuery);
    setImages([]);
    setPage(1);

    fetchImages(searchQuery, 1);
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;

    setPage(nextPage);

    fetchImages(query, nextPage);
  };

  const openModal = imageData => {
    setModalData(imageData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.container}>
            <SearchBar onSubmit={handleSearchSubmit} />
          </div>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          {error && <ErrorMessage message={error} />}
          <ImageGallery images={images} onImageClick={openModal} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <LoadMoreBtn onClick={loadMoreImages} />
          )}
          {!!query && !isLoading && !images.length && (
            <div className={styles.emptyContainer}>No images found.</div>
          )}
        </div>

        {modalData && <ImageModal data={modalData} onClose={closeModal} />}
        <Toaster position="top-right" />
      </main>
    </>
  );
};

export default App;
