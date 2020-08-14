import React from 'react';
import styles from './Searcher.module.scss';

import { SearcherButton, SearcherInput, SearcherOptions } from '../../atoms';

export function Searcher() {
  return (
    <form className={styles.Searcher} action="submit">
      <SearcherInput />
      <div className={styles.Searcher__Options}>
        <SearcherOptions props="Artist" />
        <SearcherOptions props="Album" />
        <SearcherOptions props="Song" />
      </div>
      <SearcherButton />
    </form>
  );
}
