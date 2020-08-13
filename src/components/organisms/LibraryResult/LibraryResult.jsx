import React from 'react'

import styles from './LibraryResult.module.scss'
import { TitleCategory } from '../../atoms'
import { LibraryItem } from '../../molecules'
import { Player } from '../Player'

export function LibraryResult() {
  return (
    <section className={styles.ArtistList}>
      <div>
        <TitleCategory />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <Player />
      </div>
    </section>
  )
}
