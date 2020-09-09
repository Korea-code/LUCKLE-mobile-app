import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

export default createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate('PhotoNavigator'),
    },
  },
  Notification,
  Profile,
});
