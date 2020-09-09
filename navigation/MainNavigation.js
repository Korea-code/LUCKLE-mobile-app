import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigation';
import PhotoNavigator from './PhotoNavigation';
const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    PhotoNavigator,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);

export default createAppContainer(MainNavigator);
