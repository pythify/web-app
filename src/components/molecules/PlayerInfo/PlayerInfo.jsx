import React from 'react';
import './PlayerInfo.scss';

import { CoverAlbum } from '../../atoms';

export function PlayerInfo() {
  return (
    <div className="player-cover">
      <CoverAlbum />
      <div className="player-cover-details">
        <h4>Title</h4>
        <p>artist name</p>
      </div>
    </div>
  );
}
