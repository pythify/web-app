import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/global.scss'
import { Register } from './pages'

export function App() {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
			</Switch>
		</Router>
	)
}
