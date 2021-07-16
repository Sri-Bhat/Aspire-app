import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ComingSoon} from '../containers';

const rootConfig = require('./config.json');

const AspireApp = createBottomTabNavigator(
  {
    Home: {screen: ComingSoon},
    DebitCard: {screen: ComingSoon},
    Payments: {screen: ComingSoon},
    Credit: {screen: ComingSoon},
    Profile: {screen: ComingSoon},
  },
  {
    initialRouteName: rootConfig.screens.home,
    headerMode: 'none',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
  },
);

export default createAppContainer(AspireApp);
