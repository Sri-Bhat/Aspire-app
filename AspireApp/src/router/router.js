import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ComingSoon} from '../containers';
import {BottomTabBar} from './_components';

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
    tabBarComponent: BottomTabBar,
  },
);

export default createAppContainer(AspireApp);
