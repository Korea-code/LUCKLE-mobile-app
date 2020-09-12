import React from 'react';
import { View } from 'react-native';
import { useIsLoggedIn } from '../AuthContext';
import AuthNavigator from '../navigation/AuthNavigation';
import MainNavigator from '../navigation/MainNavigation';

export default () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <View style={{ flex: '1' }}>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </View>
  );
};

{
  /* <TouchableOpacity onPress={logIn}>
<Text>Log In</Text>
</TouchableOpacity> */
}
