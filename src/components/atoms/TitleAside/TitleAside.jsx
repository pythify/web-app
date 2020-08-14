import React from 'react';
import styles from './TitleAside.module.scss';

export function TitleAside({ props }) {
  return (
    <div className={styles.MenuLink}>
      <p>{props}</p>
    </div>
  );
}
