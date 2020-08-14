import React from 'react'
import PropTypes from 'prop-types'
import styles from './SearcherInput.module.scss'

export function SearcherInput({ value, onChange }) {
  return (
    <input
      className={styles.SearcherInput}
      type="text"
      placeholder="Find your music"
      value={value}
      onChange={onChange}
    />
  )
}

SearcherInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
