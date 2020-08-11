import React from 'react';

import './CoverAlbum.scss';
import banner from '../../../assets/images/BannerLogin.svg';

export function CoverAlbum() {
  return (
    <figure className="artist_list-container-image">
      <img src={banner} alt="cover" />
    </figure>
  );
}
