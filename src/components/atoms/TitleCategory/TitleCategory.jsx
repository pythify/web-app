import React from 'react';
import styles from './TitleCategory.module.scss';

export function TitleCategory() {
  return (
    <h2 className={styles.TitleCategory}>
      selected Title (album, artist, playlist.queue)
    </h2>
  );
}
