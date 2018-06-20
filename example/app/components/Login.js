import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet,
  Image,
  TextInput
} from 'react-native'
import Button from 'react-native-button'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static navigationOptions = {
    title: 'Login'
  }

  handleSubmit() {
    this.props.navigation.navigate('Home', { title: 'Home' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>HappyShare</Text>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={require('../assets/login-button-mobile.png')}
          />
        </TouchableHighlight>
      </View>
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

export default Login
