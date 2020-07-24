import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormField.module.scss'

export function FormField({ label, type, id }) {
	return (
		<div className={styles['FormField']}>
			<label>{label}</label>
		</div>
	)
}

FormField.propTypes = {
	label: PropTypes.string
}
