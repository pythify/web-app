import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormInput.module.scss'

export function FormInput({
  variant, name, register, ...rest
}) {
  return (
    <input
      ref={register}
      className={styles.FormInput}
      type={variant}
      id={name}
      name={name}
      {...rest}
    />
  )
}

FormInput.propTypes = {
  variant: PropTypes.oneOf(['text', 'number', 'email', 'password'])
    .isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
}
