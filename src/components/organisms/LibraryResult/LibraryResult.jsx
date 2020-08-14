import React from 'react'

import styles from './LibraryResult.module.scss'
import { TitleCategory } from '../../atoms'
import { LibraryItem } from '../../molecules'
import { Player } from '../Player'
import songsInfo from './songs.json'

export function LibraryResult() {
  return (
    <section className={styles.ArtistList}>
      <div>
        <TitleCategory props="Resultados" />
        {songsInfo.data.map((item) => {
          return (
            <LibraryItem
              key={item.id}
              urlsong={item.preview}
              title={item.title}
              album={item.album.title}
              cover={item.album.cover_small}
              albumName={item.title}
            />
          )
        })}

        <Player />
      </div>
    </section>
  )
}
