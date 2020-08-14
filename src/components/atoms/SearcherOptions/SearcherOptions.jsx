import React from 'react';
import styles from './SearcherOptions.module.scss';

export function SearcherOptions({ props }) {
  return (
    <div className={styles.SearcherOptions}>
      <input type="radio" name="clase" value="songs" />
      <label>{props}</label>
    </div>
  );
}
