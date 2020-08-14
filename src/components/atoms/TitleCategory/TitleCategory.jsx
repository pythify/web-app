import React from 'react';
import styles from './TitleCategory.module.scss';

export function TitleCategory({ props }) {
  return <h2 className={styles.TitleCategory}>{props}</h2>;
}
