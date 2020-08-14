import React, { useState } from 'react'
import styles from './Searcher.module.scss'

import { SearcherButton, SearcherInput, SearcherOptions } from '../../atoms'

export function Searcher() {
  const [optionSelected, setOptionSelected] = useState(null)

  function handleOptionChange(event) {
    setOptionSelected(event.target.value)
  }

  return (
    <form className={styles.Searcher} action="submit">
      <SearcherInput />
      <div className={styles.Searcher__Options}>
        <SearcherOptions
          label="Artist"
          id="searcher-option-artist"
          value="artists"
          checked={optionSelected === 'artists'}
          onChange={handleOptionChange}
        />
        <SearcherOptions
          label="Album"
          id="searcher-option-album"
          value="albums"
          checked={optionSelected === 'albums'}
          onChange={handleOptionChange}
        />
        <SearcherOptions
          label="Song"
          id="searcher-option-song"
          value="songs"
          checked={optionSelected === 'songs'}
          onChange={handleOptionChange}
        />
      </div>
      <SearcherButton />
    </form>
  )
}
