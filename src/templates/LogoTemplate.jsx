import React from 'react'
import { Logo } from '../components/atoms'

export function LogoTemplate({ children }) {
	return (
		<div className="LogoTemplate">
			<Logo />
			{children}
		</div>
	)
}
