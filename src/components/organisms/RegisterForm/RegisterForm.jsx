import React from 'react'
import styles from './RegisterForm.module.scss'

import registerFormElements from './registerForm.json'

export function RegisterForm() {
	return (
		<form className={styles.RegisterForm}>
			<h3>{registerFormElements.title}</h3>
		</form>
	)
}
