import React from 'react';

import styles from './LibraryItem.module.scss';

import { CoverAlbum } from '../../atoms';

export function LibraryItem({ cover, albumName, title, album, urlsong }) {
  return (
    <div className={styles.Artist_listContainerItem}>
      <CoverAlbum cover={cover} albumName={albumName} />
      <h3>{title}</h3>
      <div className={styles.Artist_listContainerDescription}>
        <p>{album}</p>
      </div>
    </div>
  );
}
