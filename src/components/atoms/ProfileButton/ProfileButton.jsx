import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileButton.module.scss';

export function ProfileButton({ props }) {
  return (
    <Link to="/" className={styles.ProfileButton}>
      {props}
    </Link>
  );
}
