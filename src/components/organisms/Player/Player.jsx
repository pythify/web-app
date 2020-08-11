import React from 'react';
import styles from './Player.module.scss';

import { PlayerInfo, PlayerControl } from '../../molecules';

export function Player() {
  return (
    <div className={styles.Player}>
      <PlayerInfo />
      <PlayerControl />
    </div>
  );
}
