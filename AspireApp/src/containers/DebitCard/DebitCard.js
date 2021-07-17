import React from 'react';
import {Text, View} from 'react-native';
import {Background} from '../../components';
import {styles} from './styles';
import Logo from '../../assets/images/logos/Logo.svg';

export default function DebitCard() {
  const renderHeaderDetails = () => {
    return (
      <View style={styles.heading}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Debit Card</Text>
          <Logo width="26" height="26" />
        </View>
        <View style={styles.balanceConatiner}>
          <Text style={styles.balanceText}>Available Balance</Text>
        </View>
        <View>
          <View>{/* Currency code */}</View>
          <Text>3,000</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Background>{renderHeaderDetails()}</Background>
    </View>
  );
}
