import React from 'react';

import styles from './LibraryItem.module.scss';

import { CoverAlbum } from '../../atoms';

export function LibraryItem() {
  return (
    <div className={styles.Artist_listContainerItem}>
      <CoverAlbum />
      <h3>Title</h3>
      <div className={styles.Artist_listContainerDescription}>
        <p>3:33</p>
      </div>
    </div>
  );
}
