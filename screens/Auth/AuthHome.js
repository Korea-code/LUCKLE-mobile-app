import React from 'react';
import styled from 'styled-components';
import constants from '../../constants';
import AuthButton from '../../components/AuthButton';
const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2}px;
  height: 70px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const Subtitle = styled.Text`
  width: ${constants.width / 1.5}px;
  font-weight: 300;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
`;
export default ({ navigation }) => {
  return (
    <View>
      <Image resizeMode={'contain'} source={require('../../assets/logo.png')} />
      <AuthButton
        onPress={() => navigation.navigate('Signup')}
        text={'Sign up'}
      />
      <AuthButton
        onPress={() => navigation.navigate('Login')}
        text={'Log in'}
      />
      <Subtitle>Show your closet to the other side of the closet.</Subtitle>
    </View>
  );
};
