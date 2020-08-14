/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as playerApi from '../../services/player'
import { userSlice } from './user'

const playerInitialState = {
  songs: {},
  artists: {},
  albums: {},
  playingSong: null
}

const fetchSong = createAsyncThunk(
  'player/fetchSong',
  async ({ token, songName }) => {
    const responseData = await playerApi.fetchSong({ token, songName })
    const { data } = responseData
    // eslint-disable-next-line array-callback-return
    const songs = data.reduce((obj, song) => {
      obj[song.id.toString()] = song
    }, {})
    return songs
  }
)

export const playerSlice = createSlice({
  name: 'player',
  initialState: playerInitialState,
  reducers: {
    play: (state, { payload }) => {
      state.playingSong = state[payload].preview
    }
  },
  extraReducers: {
    [fetchSong.fulfilled]: (state, { payload }) => {
      state.songs = payload
    }
  }
})

export default userSlice.reducer

export const playAction = playerSlice.actions.play
