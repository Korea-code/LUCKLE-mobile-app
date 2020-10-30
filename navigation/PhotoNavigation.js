import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SelectPhoto from '../screens/Photo/SelectPhoto';
import TakePhoto from '../screens/Photo/TakePhoto';
import UploadPhoto from '../screens/Photo/UploadPhoto';
import { createStackNavigator } from 'react-navigation-stack';
import { stackStyle } from '../styleConfig';

const SelectPhotoTabs = createMaterialTopTabNavigator(
  {
    SelectPhoto,
    TakePhoto,
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default createStackNavigator(
  {
    SelectPhotoTabs,
    UploadPhoto,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...stackStyle,
      },
    },
  }
);
