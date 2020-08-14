import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import playerReducer from './slices/player'

const reducer = {
  user: userReducer,
  player: playerReducer
}
export default configureStore({
  reducer
})
