/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './data/store'
import { App } from './App'

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
)
