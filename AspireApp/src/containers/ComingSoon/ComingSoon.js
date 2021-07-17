import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../../assets/images/logos/Logo.svg';
import {styles} from './styles';

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Logo width="200" height="100" />
      <Text style={styles.comingSoon}>Coming Soon</Text>
    </View>
  );
}
