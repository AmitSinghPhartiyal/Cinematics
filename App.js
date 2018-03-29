import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native'
import store from './src/Store'
import { Provider } from 'react-redux'
import RouterComponent from './src/Routes'
import { MenuProvider } from 'react-native-popup-menu'
import { Router, Scene, Stack } from 'react-native-router-flux'
export default class App extends Component{
render() {
  return (
    <MenuProvider>
      <Provider store = { store }>
        <RouterComponent />
      </Provider>
    </MenuProvider>
    )
  }
}

