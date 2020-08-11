import React from 'react';

import './LibraryItem.scss';

import { CoverAlbum } from '../../atoms';

export function LibraryItem() {
  return (
    <div className="artist_list-container-item">
      <CoverAlbum />
      <h3>Title</h3>
      <div className="artist_list-container-description">
        <p>3:33</p>
      </div>
    </div>
  );
}
