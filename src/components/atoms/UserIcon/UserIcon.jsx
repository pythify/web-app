import React from 'react';
import styles from './UserIcon.module.scss';
import icon from '../../../assets/images/seemore.png';

export function UserIcon() {
  return (
    <span className={styles.HeaderUserMore}>
      <img src={icon} alt="View Options" />
    </span>
  );
}
