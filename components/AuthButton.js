import React from 'react';
import styled from 'styled-components';
import constants from '../constants';
import PropTypes from 'prop-types';

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

const AuthButton = ({ onPress, text }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Button>
        <ButtonText>{text}</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
export default AuthButton;
