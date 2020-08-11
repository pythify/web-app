import React from 'react';

import styles from './LibraryResult.module.scss';
import { TitleCategory } from '../../atoms';
import { LibraryItem } from '../../molecules';

export function LibraryResult() {
  return (
    <section className={styles.ArtistList}>
      <TitleCategory />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
      <LibraryItem />
    </section>
  );
}
