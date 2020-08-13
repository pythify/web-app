import React from 'react';
import styles from './ProfileHeader.module.scss';

import { UserAvatar, UserName, UserIcon } from '../../atoms';

export function ProfileHeader() {
  return (
    <a className={styles.HeaderUser} href="#">
      <UserAvatar />
      <UserName />
      <UserIcon />
    </a>
  );
}
