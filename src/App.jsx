import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './scss/global.scss'
import { RegisterPage, LoginPage, Library, NotFound } from './pages'

const UserLogged = ({ children }) => {
  const username = useSelector((state) => state.user.username)
  children({ isAuth: username !== null })
}

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <RegisterPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/library">
            <UserLogged>
              {({ isAuth }) => {
                if (isAuth) {
                  return (
                    <Route exact path="/library">
                      <Library />
                    </Route>
                  )
                }
                return (
                  <Route exact path="/library">
                    <LoginPage />
                  </Route>
                )
              }}
            </UserLogged>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
