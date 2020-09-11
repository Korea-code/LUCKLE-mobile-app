import React from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

const Container = styled.TouchableOpacity``;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => {
  return (
    <Container onPress={() => navigation.navigate('MessageNavigator')}>
      <Text>Messages</Text>
    </Container>
  );
});
