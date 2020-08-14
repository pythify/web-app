import React from 'react';

import styles from './CoverAlbum.module.scss';
import banner from '../../../assets/images/BannerLogin.svg';

export function CoverAlbum({ cover, albumName }) {
  return (
    <figure className={styles.Artist_listContainerImage}>
      <img src={cover} alt={albumName} />
    </figure>
  );
}
