// console.log(spotify.getMe('124893201'))
const dummyUser = {
  userId: 1,
  spotifyId: '124893301',
  playlistId: 1
}

import SpotifyWebApi from 'spotify-web-api-js'
const spotify = new SpotifyWebApi()
const token =
  'BQBpT5Y-b5ADtZQQT-kWnR9gExDHpVEBR05RyXf-KNB8zx7fKYVdq8zVk9H_Fhd8difIiy1wA6ZmOAbk510qgu2WezKkfnLXZuZTg8gqCxT8MJDdAjkWBW4NhBjDMS11yX-xXzY5CxCHTeqxHrgX22vB0ygoR4rClrLsq6hM42yaP7X-h74krRUWqdQBwt-EYX0MHF4'

const setToken = () => {
  if (token) {
    spotify.setAccessToken(token)
  }
}

const GET_USER = 'GET_USER'

const getUser = user => ({ type: GET_USER, user })

// export const fetchUser = () => {
//   return async dispatch => {
//     const response = await fetch('https://api.spotify.com/v1/users/124893201')
//     const json = await response.json()
//     dispatch(getUser(json))
//   }
// }

export const fetchUser = () => {
  return dispatch => {
    const data = dummyUser
    dispatch(getUser(data))
  }
}

// Initial State
const initialState = {}

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

export default userReducer
