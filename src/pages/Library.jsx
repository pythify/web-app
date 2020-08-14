import React from 'react';
import styles from '../scss/pages/Library.module.scss';

import { AsideNav } from '../components/molecules';
import { Header, LibraryResult } from '../components/organisms';

export function Library() {
  return (
    <main>
      <Header />
      <div className={styles.ArtistMain}>
        <AsideNav />
        <LibraryResult />
      </div>
    </main>
  );
}
