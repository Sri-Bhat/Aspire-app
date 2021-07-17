import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Background, Card} from '../../components';
import {styles} from './styles';
import Logo from '../../assets/images/logos/Logo.svg';
import Chip from '../../components/Chip';
import CommonStyles from '../../utils/commonStyles';
import {Constants} from '../../localization';

export default function DebitCard() {
  const renderHeaderDetails = () => {
    return (
      <View style={styles.heading}>
        <View style={styles.titleContainer}>
          <Text style={{...CommonStyles.boldText, ...styles.text}}>
            {Constants.debitCard}
          </Text>
          <Logo width="26" height="26" />
        </View>
        <View style={styles.balanceConatiner}>
          <Text style={styles.balanceText}>{Constants.availableBalance}</Text>
        </View>
        <View style={styles.currencySection}>
          <Chip />
          <Text style={{...CommonStyles.boldText, ...styles.currency}}>
            3,000
          </Text>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.cardContainer}>
        <Card />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Background style={styles.headingContainer}>
        {renderHeaderDetails()}
      </Background>
      <Background style={styles.bodyContainer}>{renderBody()}</Background>
    </ScrollView>
  );
}
