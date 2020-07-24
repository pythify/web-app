import React from 'react'
import styles from './RegisterForm.module.scss'

import registerFormElements from './registerForm.json'
import { FormField } from '../../molecules'

export function RegisterForm() {
	return (
		<form className={styles['RegisterForm']}>
			<h1>{registerFormElements.title}</h1>
			<div className={styles['RegisterForm__form-container']}>
				{registerFormElements.fields.map((field) => (
					<FormField key={field.id} {...field} />
				))}
			</div>
		</form>
	)
}
