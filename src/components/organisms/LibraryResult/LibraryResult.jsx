import React from 'react'

import styles from './LibraryResult.module.scss'
import { TitleCategory } from '../../atoms'
import { LibraryItem } from '../../molecules'
import { Player } from '../Player'

// import info from './data.json';

export function LibraryResult() {
  return (
    <section className={styles.ArtistList}>
      <div>
        <TitleCategory props="Resultados" />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <Player />
      </div>
    </section>
  )
}
