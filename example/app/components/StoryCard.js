import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StoryCard = props => {
  const { playlist } = props

  return (
    <View style={styles.container}>
      <Text style={styles.image} />
      <Text style={styles.user}>{playlist.user}</Text>
      <Text style={styles.name}>Play Now</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  image: {
    width: 40,
    height: 40,
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: 20
  },
  user: {
    height: 50,
    padding: 5,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  name: {
    height: 50,
    flex: 3,
    padding: 5,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center'
  }
})

export default StoryCard
