import React from 'react'
import styles from './RegisterForm.module.scss'

import registerFormElements from './registerForm.json'
import { FormField } from '../../molecules'
import { Button } from '../../atoms'

export function RegisterForm() {
	return (
		<form className={styles['RegisterForm']}>
			<h1>{registerFormElements.title}</h1>
			<div className={styles['RegisterForm__form-container']}>
				{registerFormElements.fields.map((field) => (
					<FormField key={field.id} {...field} />
				))}
				<Button>Sign Up</Button>
			</div>
		</form>
	)
}
