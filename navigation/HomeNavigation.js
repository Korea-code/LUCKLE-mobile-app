import React from 'react';
import { Image } from 'react-native';
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
        headerTitle: () => (
          <Image
            style={{ height: 40 }}
            resizeMode="contain"
            source={require('../assets/logo.png')}
          />
        ),
      },
    },
    MessageNavigator,
  },
  {
    initialRouteKey: 'Home',
  }
);
