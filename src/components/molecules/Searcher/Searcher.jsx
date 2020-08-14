import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playerAsyncActions } from '../../../data/slices/player'
import styles from './Searcher.module.scss'

import { SearcherButton, SearcherInput, SearcherOptions } from '../../atoms'

export function Searcher() {
  const [optionSelected, setOptionSelected] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.accessToken)

  function handleSearchInputChange(event) {
    setSearchInputValue(event.target.value)
  }

  function handleOptionChange(event) {
    setOptionSelected(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    if (searchInputValue.length > 0 && optionSelected.length > 0) {
      dispatch(
        playerAsyncActions[optionSelected]({
          token,
          searchQuery: searchInputValue
        })
      )
    }
  }

  return (
    <form className={styles.Searcher} onSubmit={handleFormSubmit}>
      <SearcherInput
        value={searchInputValue}
        onChange={handleSearchInputChange}
      />
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
