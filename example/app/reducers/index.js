import { combineReducers } from 'redux'
import playlistsReducer from './playlists'
import userReducer from './user'

// const rootReducer = combineReducers({
//   playlistsReducer
// })

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  user: userReducer
})

export default rootReducer
