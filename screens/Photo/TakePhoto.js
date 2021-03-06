import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
