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
        <div className={styles.LibraryResult__list}>
          {songsInfo.data.map((item) => (
            <LibraryItem
              key={item.id}
              urlsong={item.preview}
              title={item.title}
              album={item.album.title}
              cover={item.album.cover_small}
              albumName={item.title}
            />
          ))}
        </div>
        <Player />
      </div>
    </section>
  )
}
