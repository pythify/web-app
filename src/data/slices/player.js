/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { playerApi } from '../../services/player'

const playerInitialState = {
  songs: {},
  artists: {},
  albums: {},
  playingSong: null
}

const fetchSongs = createAsyncThunk(
  'player/fetchSongs',
  async ({ token, searchQuery }) => {
    const responseData = await playerApi.songs({ token, songName: searchQuery })
    const { data } = await responseData
    // eslint-disable-next-line array-callback-return
    const songs = data.reduce((obj, song) => {
      obj[song.id.toString()] = song
      return obj
    }, {})
    return songs
  }
)

const fetchArtists = createAsyncThunk(
  'player/fetchArtists',
  async ({ token, searchQuery }) => {
    const responseData = await playerApi.artists({
      token,
      artistName: searchQuery
    })
    const { data } = await responseData
    // eslint-disable-next-line array-callback-return
    const artists = data.reduce((obj, artist) => {
      obj[artist.id.toString()] = artist
      return obj
    }, {})
    return artists
  }
)

const fetchAlbums = createAsyncThunk(
  'player/fetchAlbums',
  async ({ token, searchQuery }) => {
    const responseData = await playerApi.albums({
      token,
      albumName: searchQuery
    })
    const { data } = await responseData
    // eslint-disable-next-line array-callback-return
    const albums = data.reduce((obj, album) => {
      obj[album.id.toString()] = album
      return obj
    }, {})
    return albums
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
    [fetchSongs.fulfilled]: (state, { payload }) => {
      state.songs = payload
    },
    [fetchArtists.fulfilled]: (state, { payload }) => {
      state.artists = payload
    },
    [fetchAlbums.fulfilled]: (state, { payload }) => {
      state.albums = payload
    }
  }
})

export default playerSlice.reducer

export const playAction = playerSlice.actions.play

export const playerAsyncActions = {
  artists: fetchArtists,
  albums: fetchAlbums,
  songs: fetchSongs
}
