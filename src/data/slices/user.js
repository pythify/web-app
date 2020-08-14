/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as userApi from '../../services/user'

const userInitialState = {
  username: null,
  firstName: null,
  lastName: null,
  email: null,
  profile: {
    picture: null
  },
  error: null,
  accessToken: null
}

const registerUser = createAsyncThunk(
  'users/fetchRegister',
  async (registerData) => {
    const registeredUserData = await userApi.register(registerData)
    return registeredUserData
  }
)

/* const verifyUser = createAsyncThunk('users/fetchVerify', async ({ token }) => {
  try {
    const { message: successMessage } = await userApi.verify({ token })
    return successMessage
  } catch (err) {
    return err
  }
}) */

const loginUser = createAsyncThunk('users/fetchLogin', async (loginData) => {
  const loginUserData = await userApi.login(loginData)
  return loginUserData
})

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.username = payload.username
      state.firstName = payload.first_name
      state.lastName = payload.last_name
      state.email = payload.email
      state.profile = payload.profile
      state.error = null
      state.accessToken = null
    },
    [registerUser.rejected]: (state) => {
      // TODO payload here comes with individual errors by field
      state.username = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.profile = null
      state.error = 'Error has occurred'
      state.accessToken = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.username = payload.user.username
      state.firstName = payload.user.first_name
      state.lastName = payload.user.last_name
      state.email = payload.user.email
      state.profile = payload.user.profile
      state.error = null
      state.accessToken = payload.access_token
    },
    [loginUser.rejected]: (state) => {
      state.username = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.profile = null
      state.error = 'Error has occurred'
      state.accessToken = null
    }
  }
})

export default userSlice.reducer

export const registerAsyncUser = registerUser
export const loginAsyncUser = loginUser
