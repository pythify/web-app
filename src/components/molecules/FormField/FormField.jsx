import React from 'react'
import PropTypes from 'prop-types'
import { FormInput } from '../../atoms'
import styles from './FormField.module.scss'

export function FormField({ label, type, id }) {
	return (
		<div className={styles['FormField']}>
			<label htmlFor={id}>{label}</label>
			<FormInput variant={type} name={id} />
		</div>
	)
}

FormField.propTypes = {
	label: PropTypes.string
}
