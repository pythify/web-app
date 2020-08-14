import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playAction } from '../../../data/slices/player'
import styles from './LibraryResult.module.scss'
import { TitleCategory } from '../../atoms'
import { LibraryItem } from '../../molecules'
import { Player } from '../Player'
import songsInfo from './songs.json'

export function LibraryResult() {
  const dispatch = useDispatch()
  const { songs } = useSelector((state) => state.player)
  const songsIdsArr = Object.keys(songs)

  function handlePlaySong(songId) {
    dispatch(playAction(songId))
  }

  return (
    <section className={styles.ArtistList}>
      <div>
        <TitleCategory props="Resultados" />
        <div className={styles.LibraryResult__list}>
          {songsIdsArr.map((songId) => (
            <LibraryItem
              key={songId}
              title={songs[songId].title}
              album={songs[songId].album.title}
              cover={songs[songId].album.cover_medium}
              albumName={songs[songId].title}
              onPlay={() => handlePlaySong(songId)}
            />
          ))}
        </div>
        <div className={styles.LibraryResult__player}>
          <Player />
        </div>
      </div>
    </section>
  )
}
