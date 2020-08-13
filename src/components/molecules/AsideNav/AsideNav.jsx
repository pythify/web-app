import React from 'react';

import styles from './AsideNav.module.scss';
import { TitleAside, TitleCategory } from '../../atoms';
import { Searcher } from '../index';

export function AsideNav() {
  return (
    <aside className={styles.Menu}>
      <Searcher />
      <TitleCategory />
      <TitleAside />
      <TitleAside />
      <TitleAside />
      <TitleAside />
      <TitleAside />
    </aside>
  );
}
