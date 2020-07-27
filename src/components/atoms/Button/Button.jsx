import React from 'react'
import styles from './Button.module.scss'

export function Button({ children, ...rest }) {
	return (
		<button className={styles['Button']} {...rest}>
			{children}
		</button>
	)
}
