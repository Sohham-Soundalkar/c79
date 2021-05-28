import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {appTabNavigator} from './components/appTabNavigator'

export default function App() {
  return (
    <appContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: appTabNavigator}
})

const appContainer = createAppContainer(switchNavigator)