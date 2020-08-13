import React from 'react';
import styles from './UserAvatar.module.scss';
import avatar from '../../../assets/images/user.png';

export function UserAvatar() {
  return (
    <span className={styles.HeaderUserAvatar}>
      <img src={avatar} alt="User Avatar" />
    </span>
  );
}
