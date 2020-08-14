import React from 'react';
import styles from './LogoHeader.module.scss';

import logo from '../../../assets/images/CeolLogoWhite.svg';

export function LogoHeader() {
  return (
    <div className={styles.HeaderLogo}>
      <span>
        <img src={logo} alt="Ceol Logo" />
      </span>
    </div>
  );
}
