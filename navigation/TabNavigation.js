import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Tabs/Home';
import HomeNavigator from './HomeNavigation';
import Notification from '../screens/Tabs/Notification';
import Profile from '../screens/Tabs/Profile';
import Search from '../screens/Tabs/Search';
import MessageLink from '../components/MessageLink';
import NavIcon from '../components/NavIcon';
import theme from '../theme';
const FUCUSED_COLOR = theme.darkGreenColor;
const stackFactory = (initialRoute, configs) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {
        ...configs,
      },
    },
  });

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="md-home"
            color={focused ? FUCUSED_COLOR : theme.blackColor}
          />
        ),
      },
    },
    Search: {
      screen: stackFactory(Search, { title: 'Search' }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="md-search"
            color={focused ? FUCUSED_COLOR : theme.blackColor}
          />
        ),
      },
    },
    Add: {
      screen: View,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) =>
          navigation.navigate('PhotoNavigator'),
      },
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="ios-add-circle"
            color={focused ? FUCUSED_COLOR : theme.blackColor}
          />
        ),
      },
    },
    Notification: {
      screen: stackFactory(Notification, { title: 'Notification' }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="md-notifications"
            color={focused ? FUCUSED_COLOR : theme.blackColor}
          />
        ),
      },
    },
    Profile: {
      screen: stackFactory(Profile, { title: 'Profile' }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="md-person"
            color={focused ? FUCUSED_COLOR : theme.blackColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);
