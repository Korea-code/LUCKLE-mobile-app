import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Alert } from 'react-native';
import styled from 'styled-components';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import useInput from '../../hooks/useInput';
import { LOG_IN } from './AuthQueries';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const emailInput = useInput(navigation.getParam('email', ''));
  const [loading, setLoading] = useState(false);
  const [requestSecretMutation] = useMutation(LOG_IN);
  const handleLogIn = async () => {
    const { value } = emailInput;
    if (value === '') {
      return Alert.alert("Email can't be empty");
    } else if (
      !value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      return Alert.alert('Please type an email');
    }

    try {
      setLoading(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation({
        variables: {
          email: value,
        },
      });
      if (requestSecret) {
        Alert.alert('Check your email');
        navigation.navigate('Confirm', { email: value });
        return;
      } else {
        Alert.alert('Account not found');
        navigation.navigate('Signup', { email: value });
        return;
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't log in now");
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
          returnKeyType="send"
          onSubmitEditing={handleLogIn}
        />
        <AuthButton onPress={handleLogIn} text={'Log in'} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};
