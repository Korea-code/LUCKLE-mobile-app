import React from 'react';
import styled from 'styled-components';
import constants from '../constants';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

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

const AuthButton = ({ onPress, text, loading = false }) => {
  return (
    <ButtonContainer disabled={loading} onPress={onPress}>
      <Button>
        {loading ? <ActivityIndicator color={'white'}/> : <ButtonText>{text}</ButtonText>}
      </Button>
    </ButtonContainer>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
export default AuthButton;
