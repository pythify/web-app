import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

export function Button({ children, type, ...rest }) {
  return (
    <button className={styles.Button} type={type} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf('submit', 'button', 'reset')
}

Button.defaultProps = {
  type: 'submit'
}
