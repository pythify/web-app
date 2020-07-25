import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../../atoms'
import styles from './FormField.module.scss'

export function FormField({ label, type, id, required, ...rest }) {
	return (
		<div className={styles['FormField']}>
			<label htmlFor={id}>
				{label}
				{required && ' *'}
			</label>
			<FormInput variant={type} name={id} required={required} {...rest} />
		</div>
	)
}

FormField.propTypes = {
	label: PropTypes.string
}
