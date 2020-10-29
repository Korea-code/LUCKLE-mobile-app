import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Alert } from 'react-native';
import styled from 'styled-components';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import useInput from '../../hooks/useInput';
import { CREATE_ACCOUNT } from './AuthQueries';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const emailInput = useInput(navigation.getParam('email', ''));
  const usernameInput = useInput('');
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT);
  const handleSignup = async () => {
    if (emailInput.value === '') {
      return Alert.alert("Email can't be empty");
    } else if (
      !emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      return Alert.alert('Please type an email');
    } else if (usernameInput.value === '') {
      return Alert.alert("Username can't be empty");
    } else if (firstNameInput.value === '') {
      return Alert.alert("Username can't be empty");
    } else if (lastNameInput.value === '') {
      return Alert.alert("Username can't be empty");
    }

    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation({
        variables: {
          username: usernameInput.value,
          email: emailInput.value,
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
        },
      });
      if (createAccount) {
        Alert.alert('Account created', 'Well come to Luckle');
        navigation.navigate('Login', { email: emailInput.value });
        return;
      } else {
        Alert.alert('This Email or Username already taken');
      }
    } catch (e) {
      console.log(e);
      return Alert.alert("You can't sign up");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder={'Email'}
          keyboardType={'email-address'}
          returnKeyType="next"
          onSubmitEditing={handleSignup}
        />
        <AuthInput
          {...usernameInput}
          placeholder={'Username'}
          returnKeyType="next"
          onSubmitEditing={handleSignup}
        />
        <AuthInput
          {...firstNameInput}
          placeholder={'First name'}
          returnKeyType="next"
          onSubmitEditing={handleSignup}
        />
        <AuthInput
          {...lastNameInput}
          placeholder={'Last name'}
          returnKeyType="send"
          onSubmitEditing={handleSignup}
        />
        <AuthButton onPress={handleSignup} text={'Sign Up'} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};
