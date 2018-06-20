import React from 'react'
import {
  View,
  Text,
  NativeModules,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

import { fetchPlaylists } from '../reducers/playlists'

const SpotifyModule = NativeModules.SpotifyModule

class SingleStory extends React.Component {
  componentDidMount() {
    SpotifyModule.initialized(error => {
      if (error) {
        console.warn(error)
      }
    })
    this.props.getAllPlaylists()
  }

  render() {
    const allPlaylists = this.props.playlists
    const startingIndex = allPlaylists.indexOf(
      this.props.navigation.state.params.playlist
    )
    const playlistOrder = allPlaylists
      .slice(startingIndex, allPlaylists.length)
      .concat(allPlaylists.slice(0, startingIndex))

    return (
      <Swiper
        autoplay={false}
        loop={false}
        showsButtons={false}
        showsPagination={false}
      >
        {playlistOrder.map(singleStory => {
          return (
            <View style={styles.container} key={singleStory.user}>
              <Text style={styles.normalText}>{singleStory.user}'s Story</Text>
              <Text style={styles.normalText}>Select a song to start</Text>
              {singleStory.tracks.map(song => {
                return (
                  <View key={song.id} style={styles.btnSong}>
                    <TouchableHighlight
                      onPress={() => {
                        SpotifyModule.playSpotifyURI(
                          song.spotifyTrackId,
                          0,
                          0.0,
                          error => {
                            if (error) {
                              console.error('Something went wrong')
                            }
                          }
                        )
                      }}
                    >
                      <Text style={styles.btnText}>
                        {song.title} by {song.artist}
                      </Text>
                    </TouchableHighlight>
                  </View>
                )
              })}
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  SpotifyModule.playbackState(res => {
                    if (res.isPlaying) {
                      SpotifyModule.setIsPlaying(false, err => {
                        if (err) {
                          console.warn('Pause', err)
                        }
                      })
                    } else {
                      SpotifyModule.setIsPlaying(true, err => {
                        if (err) {
                          console.warn('Play', err)
                        }
                      })
                    }
                  })
                }}
              >
                <Text style={styles.btnText}>Play/Pause</Text>
              </TouchableHighlight>
            </View>
          )
        })}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 45,
    borderRadius: 64
  },
  image: {
    width: 250,
    height: 50
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnSong: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
})

const mapState = state => {
  return {
    playlists: state.playlists,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getAllPlaylists: () => dispatch(fetchPlaylists())
  }
}

export default connect(
  mapState,
  mapDispatch
)(SingleStory)
