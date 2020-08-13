import React from 'react';
import styles from './Profile.module.scss';

import { ProfileImg, ProfileInput, ProfileButton } from '../../atoms';

export function Profile() {
  return (
    <main className={styles.Profile}>
      <ProfileImg />
      <ProfileInput />
      <ProfileInput />
      <ProfileButton />
    </main>
  );
}
