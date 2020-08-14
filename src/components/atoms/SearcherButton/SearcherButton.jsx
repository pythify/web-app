import React from 'react'
import styles from './SearcherButton.module.scss'

export function SearcherButton() {
  return (
    <input className={styles.SearcherButton} type="submit" value="buscar" />
  )
}
