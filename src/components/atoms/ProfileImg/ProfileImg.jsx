import React from 'react';
import styles from './ProfileImg.module.scss';

export function ProfileImg({ props }) {
  return (
    <span className={styles.ProfileImage}>
      <img src={props} alt="user's avatar" />
    </span>
  );
}
