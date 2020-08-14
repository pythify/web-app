import React from 'react';

import styles from './AsideNav.module.scss';
import { TitleAside, TitleCategory } from '../../atoms';
import { Searcher } from '../index';

import labels from './labels.json';

export function AsideNav() {
  return (
    <aside className={styles.Menu}>
      <Searcher />
      <TitleCategory props={labels.library} />
      <TitleAside props={labels.artists} />
      <TitleAside props={labels.albums} />
      <TitleAside props={labels.songs} />
    </aside>
  );
}
