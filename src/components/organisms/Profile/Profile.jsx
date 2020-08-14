import React from 'react';
import styles from './Profile.module.scss';

import { ProfileImg, ProfileInput, ProfileButton } from '../../atoms';

import labels from './data.json';

export function Profile() {
  return (
    <main className={styles.Profile}>
      <ProfileImg props={labels.img} />
      <ProfileInput props={labels.first} />
      <ProfileInput props={labels.second} />
      <ProfileButton props={labels.button} />
    </main>
  );
}
