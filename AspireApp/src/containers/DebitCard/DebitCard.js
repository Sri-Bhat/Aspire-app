import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Background, Card} from '../../components';
import {styles} from './styles';
import Logo from '../../assets/images/logos/Logo.svg';
import Chip from '../../components/Chip';
import CommonStyles from '../../utils/commonStyles';
import {Constants} from '../../localization';
import {DebitCardServices} from '../../services/debitCard';
import Loader from '../../components/Loader';

export default function DebitCard() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  const onSuccessGettingData = res => {
    setdata(res);
    setloading(false);
  };

  const onFailure = error => {
    alert('Something went wrong');
  };

  useEffect(() => {
    DebitCardServices.getDebitCardsInfo(onSuccessGettingData, onFailure);
  }, []);

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
        <Text>Hii</Text>
      </View>
    );
  };

  const renderData = () => {
    return (
      <View>
        <Background style={styles.headingContainer}>
          {renderHeaderDetails()}
        </Background>
        <View style={styles.card}>
          <Card />
        </View>
        <Background style={styles.bodyContainer}>{renderBody()}</Background>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? <Loader /> : renderData()}
    </ScrollView>
  );
}
