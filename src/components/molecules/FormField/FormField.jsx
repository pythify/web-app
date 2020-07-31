import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../../atoms'
import styles from './FormField.module.scss'

export function FormField({
  label, type, id, required, register, ...rest
}) {
  return (
    <div className={styles.FormField}>
      <label htmlFor={id}>
        {label}
        {required && ' *'}
      </label>
      <FormInput variant={type} name={id} required={required} register={register} {...rest} />
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func.isRequired
}

FormField.defaultProps = {
  required: false
}
