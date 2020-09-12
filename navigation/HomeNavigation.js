import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Tabs/Home';
import MessageLink from '../components/MessageLink';
import MessageNavigator from './MessagesNavigation';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerRight: () => <MessageLink />,
      },
    },
    MessageNavigator,
  },
  {
    initialRouteKey: 'Home',
  }
);
