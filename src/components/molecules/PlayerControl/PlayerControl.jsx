import React from 'react';
import styles from './PlayerControl.module.scss';

import random from '../../../assets/images/random.png';
import prev from '../../../assets/images/prev.png';
import play from '../../../assets/images/play.png';
import next from '../../../assets/images/next.png';
import repeat from '../../../assets/images/repeat.png';

export function PlayerControl() {
  return (
    <div className={styles.PlayerPanel}>
      <div className={styles.PlayerPanelIcons}>
        <span className={styles.PlayerPanelIcon}>
          <img src={random} alt="" />
        </span>
        <span className={styles.PlayerPanelIcon}>
          <img src={prev} alt="" />
        </span>
        <span className={styles.PlayerPanelIcon}>
          <img src={play} alt="" />
        </span>
        <span className={styles.PlayerPanelIcon}>
          <img src={next} alt="" />
        </span>
        <span className={styles.PlayerPanelIcon}>
          <img src={repeat} alt="" />
        </span>
      </div>
      <div className={styles.PlayerPanelBar}></div>
    </div>
  );
}
