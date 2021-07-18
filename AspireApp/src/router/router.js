import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {ComingSoon, DebitCard, SpendingLimit} from '../containers';
import {BottomTabBar} from './_components';

const rootConfig = require('./config.json');

const HomeTabs = createBottomTabNavigator(
  {
    Home: {screen: ComingSoon},
    DebitCard: {screen: DebitCard},
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

const AspireApp = createStackNavigator(
  {
    Home: {
      screen: HomeTabs,
    },
    SpendingLimit: {
      screen: SpendingLimit,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(AspireApp);
