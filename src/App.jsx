import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './scss/global.scss'
import { RegisterPage, LoginPage, Library, NotFound } from './pages'

// TODO
// eslint-disable-next-line react/prop-types
function PrivateRoute({ children, ...rest }) {
  const username = useSelector((state) => state.user.username)
  const isAuthenticated = username !== null

  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-confusing-arrow
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Library />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
