import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileHeader.module.scss';

import { UserAvatar, UserName, UserIcon } from '../../atoms';

export function ProfileHeader() {
  return (
    <Link className={styles.HeaderUser} to="/profile">
      <UserAvatar />
      <UserName />
      {/* <UserIcon />  */}
    </Link>
  );
}
