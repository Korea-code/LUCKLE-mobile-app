import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigation';
import PhotoNavigator from './PhotoNavigation';
import MessageNavigator from './MessagesNavigation';
import { stackStyle } from '../styleConfig';
const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    PhotoNavigator,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        ...stackStyle,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
