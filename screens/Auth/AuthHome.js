import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';
import constants from '../../constants';
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
const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: 5px;
`;
const Button = styled.View`
  background-color: ${(props) => props.theme.darkGreenColor};
  padding: 10px;
  width: ${constants.width - 150};
  border-radius: 6px;
`;
const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 300;
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
      <ButtonContainer onPress={() => navigation.navigate('Signup')}>
        <Button>
          <ButtonText>Sign up</ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <Button>
          <ButtonText>Log in</ButtonText>
        </Button>
      </ButtonContainer>
      <Subtitle>Show your closet to the other side of the closet.</Subtitle>
    </View>
  );
};
