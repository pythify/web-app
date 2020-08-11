import React from 'react';

import styles from './CoverAlbum.module.scss';
import banner from '../../../assets/images/BannerLogin.svg';

export function CoverAlbum() {
  return (
    <figure className={styles.Artist_listContainerImage}>
      <img src={banner} alt="cover" />
    </figure>
  );
}
