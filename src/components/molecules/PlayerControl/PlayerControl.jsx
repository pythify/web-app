import React from 'react';
import './PlayerControl.scss';

import random from '../../../assets/images/random.png';
import prev from '../../../assets/images/prev.png';
import play from '../../../assets/images/play.png';
import next from '../../../assets/images/next.png';
import repeat from '../../../assets/images/repeat.png';

export function PlayerControl() {
  return (
    <div className="player-panel">
      <div className="player-panel-icons">
        <span className="player-panel-icon">
          <img src={random} alt="" />
        </span>
        <span className="player-panel-icon">
          <img src={prev} alt="" />
        </span>
        <span className="player-panel-icon">
          <img src={play} alt="" />
        </span>
        <span className="player-panel-icon">
          <img src={next} alt="" />
        </span>
        <span className="player-panel-icon">
          <img src={repeat} alt="" />
        </span>
      </div>
      <div className="player-panel-bar"></div>
    </div>
  );
}
