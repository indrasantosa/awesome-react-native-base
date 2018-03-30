import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import { Font } from 'expo'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import HomeScreen from './App/Containers/HomeScreen'
import ListScreen from './App/Containers/ListScreen'

export default TabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name='home' />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false
})
