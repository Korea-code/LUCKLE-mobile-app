import React, {useState} from 'react';
import { useMutation } from 'react-apollo-hooks';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Alert } from 'react-native';
import styled from 'styled-components';
import AuthButton from '../../components/AuthButton';
import AuthInput from '../../components/AuthInput';
import useInput from '../../hooks/useInput';
import { CONFIRM_SECRET } from './AuthQueries'
import {useLogIn} from '../../AuthContext';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
  const confirmInput = useInput('');
  const login = useLogIn();
  const [loading, setLoading] = useState(false);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET);
  const handleConfirm = async () => {
    const { value } = confirmInput;
    if(value === '' || !value.includes(' '))
      return Alert.alert('Invalid secret');
    try{
      setLoading(true);
      const {data: { confirmSecret } } = await confirmSecretMutation({ variables: {
        email: navigation.getParam("email"),
        secret: confirmInput.value 
      }});
      if(confirmSecret !== '' || confirmSecret !== false){
        login(confirmSecret);

        return;
      }else {
        Alert.alert("Wrong secret");
      }
     
    }catch(e){
      console.log(e);
      Alert.alert("Can't confirm secret");
    }finally{
    setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder={'Secret'}
          returnKeyType="send"
          onSubmitEditing={handleConfirm}
        />
        <AuthButton onPress={handleConfirm} text={'Confirm'} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};
