import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <Text>Select Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
