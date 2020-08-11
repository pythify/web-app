import React from 'react';

import styles from './AsideNav.module.scss';
import { TitleAside } from '../../atoms';

export function AsideNav() {
  return (
    <aside className={styles.Menu}>
      <TitleAside />
      <TitleAside />
      <TitleAside />
      <TitleAside />
      <TitleAside />
    </aside>
  );
}
