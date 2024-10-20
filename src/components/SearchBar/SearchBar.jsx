import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchInputWrapper}>
        <span className={styles.searchIcon}>&#128269;</span>
        <input
          type="text"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoFocus
          className={styles.searchInput}
        />
      </div>
    </form>
  );
};

export default SearchBar;
