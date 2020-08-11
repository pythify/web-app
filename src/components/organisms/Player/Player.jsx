import React from 'react';
import './Player.scss';

import { PlayerInfo, PlayerControl } from '../../molecules';

export function Player() {
  return (
    <div className="player">
      <PlayerInfo />
      <PlayerControl />
    </div>
  );
}
