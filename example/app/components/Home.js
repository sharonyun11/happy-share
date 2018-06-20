import React from 'react'
import { View, Text, StyleSheet, ScrollView, AppRegistry } from 'react-native'
import Button from 'react-native-button'
import { connect } from 'react-redux'

import StoryCard from './StoryCard'
import { fetchPlaylists } from '../reducers/playlists'
import { fetchUser } from '../reducers/user'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount() {
    this.props.getAllPlaylists()
    this.props.getUserInfo()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.normalText}>Your Friends' Spotify Stories</Text>
          {this.props.playlists.length > 0 &&
            this.props.playlists.map(playlist => (
              <View style={styles.cardContainer} key={playlist.user}>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('FriendStory', {
                      playlist: playlist
                    })
                  }
                >
                  <StoryCard playlist={playlist} />
                </Button>
              </View>
            ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingBottom: 50
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: 'white'
  },
  cardContainer: {
    width: 300,
    height: 50,
    margin: 10,
    borderColor: '#84bd00',
    backgroundColor: '#84bd00',
    borderWidth: 2,
    // borderRadius: 25,
    paddingLeft: 5,
    justifyContent: 'center'
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
    getAllPlaylists: () => dispatch(fetchPlaylists()),
    getUserInfo: () => dispatch(fetchUser())
  }
}

export default connect(
  mapState,
  mapDispatch
)(Home)

// export default HomeScreen

AppRegistry.registerComponent('HappyShare', () => spotifyModule)
