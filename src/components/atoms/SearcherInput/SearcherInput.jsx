import React from 'react';
import styles from './SearcherInput.module.scss';

export function SearcherInput() {
  return (
    <input
      className={styles.SearcherInput}
      type="text"
      placeholder="Find your music"
    />
  );
}
