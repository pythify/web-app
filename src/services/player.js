/* eslint-disable camelcase */
const API_BASE_URL = 'https://ceolapi.xyz'

const parseSearchCriteria = (search) => search.split(' ').join('-')

export const fetchSong = async ({ token, songName }) => {
  const parsedSongName = parseSearchCriteria(songName)
  const response = await fetch(
    `${API_BASE_URL}/player/songs/${parsedSongName}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      }
    }
  )
  return response.json()
}

export const fetchArtist = async ({ token, artistName }) => {
  const parsedArtistName = parseSearchCriteria(artistName)
  const response = await fetch(
    `${API_BASE_URL}/player/songs/${parsedArtistName}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      }
    }
  )
  return response.json()
}

export const fetchAlbum = async ({ token, albumName }) => {
  const parsedAlbumName = parseSearchCriteria(albumName)
  const response = await fetch(
    `${API_BASE_URL}/player/songs/${parsedAlbumName}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      }
    }
  )
  return response.json()
}
