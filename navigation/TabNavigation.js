import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Tabs/Home';
import Notification from '../screens/Tabs/Notification';
import Profile from '../screens/Tabs/Profile';
import Search from '../screens/Tabs/Search';
import MessageLink from '../components/MessageLink';

const stackFactory = (initialRoute, configs) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {
        ...configs,
      },
    },
  });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: 'Home',
      headerRight: () => <MessageLink />,
    }),
  },
  Search: {
    screen: stackFactory(Search, { title: 'Search' }),
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate('PhotoNavigator'),
    },
  },
  Notification: {
    screen: stackFactory(Notification, { title: 'Notification' }),
  },
  Profile: {
    screen: stackFactory(Profile, { title: 'Profile' }),
  },
});
