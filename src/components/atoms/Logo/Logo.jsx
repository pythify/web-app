import React from 'react'
import logo from '../../../assets/images/ceol-logo.png'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <figure className={styles.Logo}>
      <img src={logo} alt="Logo" />
    </figure>
  )
}
