import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import constants from '../constants';

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  ${(props) => props.theme.whiteBox}
  width: ${constants.width - 150};
  height: 35px;
  padding: 6px;
  font-weight: 300;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = 'default',
  onChangeText,
  returnKeyType = 'default',
  onSubmitEditing,
}) => {
  return (
    <Container>
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address'])
    .isRequired,
  onChangeText: PropTypes.func.isRequired,
  returnKeyType: PropTypes.oneOf([
    'default',
    'go',
    'join',
    'next',
    'route',
    'search',
    'send',
    'done',
  ]).isRequired,
  onSubmitEditing: PropTypes.func,

};

export default AuthInput;
