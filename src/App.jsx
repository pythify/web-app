import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/global.scss'
import { RegisterPage } from './pages'

export function App() {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<RegisterPage />
				</Route>
			</Switch>
		</Router>
	)
}
