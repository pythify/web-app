import React from 'react';
import styles from './Header.module.scss';

import { LogoHeader } from '../../atoms';
import { ProfileHeader } from '../../molecules';

export function Header() {
  return (
    <header className={styles.Header}>
      <LogoHeader />
      <ProfileHeader />
    </header>
  );
}
