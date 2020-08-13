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
          <PrivateRoute exact path="/">
            <Library />
          </PrivateRoute>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
<<<<<<< HEAD
=======
          <Route exact path="/library">
            <UserLogged>
              {({ isAuth }) =>
                isAuth ? (
                  <Route exact path="/library">
                    <Library />
                  </Route>
                ) : (
                  <Route exact path="/library">
                    <LoginPage />
                  </Route>
                )
              }
            </UserLogged>
          </Route>
          <Route exact path="/profile">
            <UserLogged>
              {({ isAuth }) =>
                isAuth ? (
                  <Route exact path="/profile">
                    <ProfilePage />
                  </Route>
                ) : (
                  <Route exact path="/profile">
                    <LoginPage />
                  </Route>
                )
              }
            </UserLogged>
          </Route>
>>>>>>> 5787b1f... library and profile mockups we're done
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
