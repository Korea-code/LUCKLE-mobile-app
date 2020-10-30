import { createStackNavigator } from 'react-navigation-stack';

import Message from '../screens/Message/Message';
import Messages from '../screens/Message/Messages';
import { stackStyle } from '../styleConfig';
export default MessageNavigator = createStackNavigator({
  Messages,
  Message,
});
