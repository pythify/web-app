import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'

const reducer = {
  user: userReducer
}
export default configureStore({
  reducer
})
