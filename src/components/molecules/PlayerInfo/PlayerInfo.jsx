import React from 'react';
import styles from './PlayerInfo.module.scss';

import { CoverAlbum } from '../../atoms';

export function PlayerInfo() {
  return (
    <div className={styles.PlayerCover}>
      <CoverAlbum />
      <div className={styles.PlayerCoverDetails}>
        <h4>Title</h4>
        <p>artist name</p>
      </div>
    </div>
  );
}
