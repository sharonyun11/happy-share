import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  NativeModules,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import { SPOTIFY_CLIENT_ID, REDIRECT_URL } from './secrets'
import store from './app/store'
import { Home, SingleStory } from './app/components'

const SpotifyModule = NativeModules.SpotifyModule
console.log('NativeModules', NativeModules)
console.log('SpotiyModule', SpotifyModule)

// const redirectUrl = 'http://localhost:8081/'

class logIn extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    return SpotifyModule.initWithCredentials(
      SPOTIFY_CLIENT_ID,
      REDIRECT_URL,
      ['streaming'],
      error => {
        if (error) {
          console.log(`some ${error}`)
        }
      }
    )
  }

  handleSubmit() {
    this.props.navigation.navigate('Home', { title: 'Home' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>HappyShare</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            //Start Auth process
            SpotifyModule.loggedIn(res => {
              console.warn(res)
              if (!res) {
                SpotifyModule.startAuthenticationFlow((error, str) => {
                  if (!error) {
                    console.log('New Access Token = ' + str)
                  } else {
                    console.log('Cached Access Token = ' + accessToken)
                  }
                })
              } else {
                this.props.navigator.navigate({
                  component: Home,
                  title: 'Success'
                })
              }
            })
          }}
        >
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={require('./assets/login-button-mobile.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={require('./assets/login-button-mobile.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

class logInSuccess extends Component {
  componentDidMount() {
    SpotifyModule.initialized(error => {
      if (error) {
        console.warn(error)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>LogIn Success!</Text>
        <Text style={styles.normalText}>Select a song to start!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyModule.playSpotifyURI(
              'spotify:track:12x8gQl2UYcQ3tizSfoPbZ',
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
          <Text style={styles.btnSong}>1. Sheen - Xeno & Oaklander</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            SpotifyModule.playSpotifyURI(
              'spotify:track:0U0ldCRmgCqhVvD6ksG63j',
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
          <Text style={styles.btnSong}>2. Nightcall - Kavinsky</Text>
        </TouchableHighlight>

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
  }
}

const Navigation = createStackNavigator({
  Login: { screen: logIn },
  Home: { screen: Home },
  FriendStory: { screen: SingleStory }
})

//Used to navigate between other components
class spotifyModule extends Component {
  static router = Navigation.router

  render() {
    const { navigation } = this.props
    return (
      <Provider store={store}>
        <Navigation navigation={navigation} />
      </Provider>
      // <NavigatorIOS
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  btnSong: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
})

AppRegistry.registerComponent('spotifyModule', () => spotifyModule)
