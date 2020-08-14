import React from 'react'
import PropTypes from 'prop-types'
import styles from './SearcherOptions.module.scss'

export function SearcherOptions({ label, id, checked, value, onChange }) {
  return (
    <div className={styles.SearcherOptions}>
      <input
        id={id}
        type="radio"
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

SearcherOptions.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
