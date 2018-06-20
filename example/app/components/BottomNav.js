import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation' // Version can be specified in package.json

import Home from './Home'
import Playlist from './Playlist'

export default TabNavigator(
  {
    Home: { screen: Home },
    Playlist: { screen: Playlist }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Playlist') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
)
