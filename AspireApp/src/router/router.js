import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {ComingSoon, DebitCard, SpendingLimit} from '../containers';
import {BottomTabBar} from './_components';

const rootConfig = require('./config.json');

const DebitCardStack = createStackNavigator(
  {
    DebitCard: {screen: DebitCard},
    SpendingLimit: {screen: SpendingLimit},
  },
  {
    initialRouteName: rootConfig.screens.debitCard,
    headerMode: 'none',
  },
);

const AspireApp = createBottomTabNavigator(
  {
    Home: {screen: ComingSoon},
    DebitCard: {screen: DebitCardStack},
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
