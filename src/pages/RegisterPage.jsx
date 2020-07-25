import React from 'react'
import { RegisterForm } from '../components/organisms'
import { LogoTemplate } from '../templates'
import styles from '../scss/pages/RegisterPage.module.scss'

export function RegisterPage() {
	return (
		<LogoTemplate>
			<div className={styles['RegisterPage']}>
				<figure className={styles['RegisterPage__banner']}>
					<img src="" alt="Banner" />
				</figure>
				<RegisterForm />
			</div>
		</LogoTemplate>
	)
}
