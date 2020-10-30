import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeNavigator from './HomeNavigation';
import Notification from '../screens/Tabs/Notification';
import Profile from '../screens/Tabs/Profile';
import Search from '../screens/Tabs/Search';
import NavIcon from '../components/NavIcon';
import theme from '../theme';
import { stackStyle } from '../styleConfig';
const FUCUSED_COLOR = theme.darkGreenColor;
const stackFactory = (initialRoute, configs) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {
        ...configs,
        headerStyle: {
          ...stackStyle,
        },
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
            color={focused ? FUCUSED_COLOR : theme.darkGreyColor}
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
            color={focused ? FUCUSED_COLOR : theme.darkGreyColor}
          />
        ),
      },
    },
    Add: {
      screen: View,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) =>
          navigation.navigate('PhotoNavigator'),
        tabBarIcon: (
          <NavIcon name="ios-add-circle" color={theme.darkGreyColor} />
        ),
      },
    },
    Notification: {
      screen: stackFactory(Notification, { title: 'Notification' }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            name="md-notifications"
            color={focused ? FUCUSED_COLOR : theme.darkGreyColor}
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
            color={focused ? FUCUSED_COLOR : theme.darkGreyColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        ...stackStyle,
      },
    },
  }
);
