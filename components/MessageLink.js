import React from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import NavIcon from './NavIcon';

const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => {
  return (
    <Container onPress={() => navigation.navigate('MessageNavigator')}>
      <NavIcon name={'ios-chatboxes'} />
    </Container>
  );
});
