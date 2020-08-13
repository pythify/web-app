import React from 'react';
import styles from '../scss/pages/Library.module.scss';

import { AsideNav } from '../components/molecules';
import { LibraryResult } from '../components/organisms';

export function Library() {
  return (
    <main className={styles.ArtistMain}>
      <AsideNav />
      <LibraryResult />
    </main>
  );
}
