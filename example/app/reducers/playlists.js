// import axios from 'axios'
// import * as spotifyAPI from '../../server/api/spotifyAPI'

// Dummy Data
const dummyplaylists = {
  playlist: [
    {
      user: 'Sharon',
      name: 'My Stories',
      tracks: [
        {
          title: 'Blessed',
          artist: 'Daniel Caesar',
          spotifyTrackId: 'spotify:track:1RMJOxR6GRPsBHL8qeC2ux'
        },
        {
          title: 'Upper West Side',
          artist: 'King Princess',
          spotifyTrackId: 'spotify:album:6VnoKML5dWRxOOEbMAPfG5'
        },
        {
          title: "Wouldn't Leave",
          artist: 'Kanye West',
          spotifyTrackId: 'spotify:track:3dG6tjetoR4GMmUGZUprLt'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Picla',
      name: "Picla's Stories",
      tracks: [
        {
          title: 'Think About Me',
          artist: 'dvsn',
          spotifyTrackId: 'spotify:track:4LkLfPYc3yjOta7Gk8FDRB'
        },
        {
          title: 'Body Talk',
          artist: 'Majid Jordan',
          spotifyTrackId: 'spotify:track:1fCz8XdLhSqUZoIpZjpg10'
        },
        {
          title: 'Song',
          artist: 'Whatever',
          spotifyTrackId: 'spotify:track:1RMJOxR6GRPsBHL8qeC2ux'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Ryan',
      name: "Ryan's Stories",
      tracks: [
        {
          title: 'Hamilton',
          artist: 'Cast of Hamilton',
          spotifyTrackId: 'spotify:track:4TTV7EcfroSLWzXRY6gLv6'
        },
        {
          title: 'Remember Me',
          artist: 'Benjamin Bratt',
          spotifyTrackId: 'spotify:track:4ljlAxfaEjO4Q4g9FMtVj4'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend1',
      name: 'Friend Stories1',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend2',
      name: 'Friend Stories2',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend3',
      name: 'Friend Stories3',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend4',
      name: 'Friend Stories4',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend5',
      name: 'Friend Stories5',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend6',
      name: 'Friend Stories6',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend7',
      name: 'Friend Stories7',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend8',
      name: 'Friend Stories8',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    },
    {
      user: 'Friend9',
      name: 'Friend Stories9',
      tracks: [
        {
          title: 'Song',
          artist: 'Artist'
        },
        {
          title: 'Song',
          artist: 'Artist'
        }
      ],
      dateCreated: ''
    }
  ]
}

// Action Types
const GET_ALL_PLAYLISTS = 'GET_ALL_PLAYLISTS'

// Action Creators
const getAllPlaylists = playlists => ({ type: GET_ALL_PLAYLISTS, playlists })

// Thunk Creators
export const fetchPlaylists = () => {
  return dispatch => {
    const data = dummyplaylists
    dispatch(getAllPlaylists(data.playlist))
  }
}

// async function getMoviesFromApi() {
//   try {
//     let response = await axios.get(
//       'https://facebook.github.io/react-native/movies.json'
//     )
//     let responseJson = await response.json()
//     return responseJson.movies
//   } catch (error) {
//     console.error(error)
//   }
// }

// Initial State
const initialState = []

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYLISTS:
      return action.playlists
    default:
      return state
  }
}

export default reducer
