import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import * as Progress from 'react-native-progress';
import {Background, Card, SectionCard} from '../../components';
import {styles} from './styles';
import Logo from '../../assets/images/logos/Logo.svg';
import Chip from '../../components/Chip';
import CommonStyles from '../../utils/commonStyles';
import {Constants} from '../../localization';
import {DebitCardServices} from '../../services/debitCard';
import Loader from '../../components/Loader';
import DataHandlers from '../../utils/datahandlers';
import {AspireContext} from '../../context';
import {Scaling} from '../../utils';
import {Colors} from '../../assets';
const routerConfig = require('./../../router/config.json');

export default function DebitCard(props) {
  const {navigation} = props;
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  const context = useContext(AspireContext);
  const {spentLimit, dataHandlers, isLimitSet} = context;
  const {manageLimitSetting} = dataHandlers;

  const onSuccessGettingData = res => {
    setdata(res);
    setloading(false);
  };

  const onFailure = error => {
    alert(Constants.wentWrong);
  };

  useEffect(() => {
    DebitCardServices.getDebitCardsInfo(onSuccessGettingData, onFailure);
  }, []);

  const renderHeaderDetails = () => {
    const availBalance = DataHandlers.get(data, 'balanceDetails.amount');
    const currencyVal = DataHandlers.get(data, 'balanceDetails.currency');
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
          <Chip value={currencyVal} />
          <Text style={{...CommonStyles.boldText, ...styles.currency}}>
            {availBalance && availBalance.toLocaleString()}
          </Text>
        </View>
      </View>
    );
  };

  const showToast = () => Toast.show(Constants.comingSoon);

  const navigateToInnerScreen = () =>
    navigation.navigate(routerConfig.screens.spendingLimit);

  const onPressToggle = flag => {
    if (flag) {
      if (spentLimit) {
        manageLimitSetting(flag);
      } else {
        navigation.navigate(routerConfig.screens.spendingLimit);
      }
    } else {
      manageLimitSetting(flag);
    }
  };

  const renderprogress = () => {
    // Extracting Response data through DataHandlers.get method to avoid null handling
    const debittedAmount = DataHandlers.get(data, 'debitedAmount');
    const progress = debittedAmount / parseInt(spentLimit);
    return (
      <View style={styles.progressContainer}>
        <View style={styles.progresLables}>
          <Text style={styles.instruction}>{Constants.spendingLimitLabel}</Text>
          <View style={styles.limitValue}>
            <Text style={styles.limit}>$ {debittedAmount} </Text>
            <Text style={styles.value}>| $ {spentLimit}</Text>
          </View>
        </View>
        <View style={styles.progres}>
          <Progress.Bar
            progress={progress}
            width={Scaling.sw(366)}
            height={Scaling.sh(10)}
            borderColor={Colors.transparent}
            unfilledColor={Colors.greenTeriary}
            color={Colors.green}
          />
        </View>
      </View>
    );
  };

  const renderBody = () => {
    // Extracting Response data through DataHandlers.get method to avoid null handling
    const sectionData = DataHandlers.get(data, 'sections');
    return (
      <View style={styles.cardContainer}>
        {isLimitSet && renderprogress()}
        {sectionData &&
          sectionData.map((item, index) => (
            <SectionCard
              key={index}
              data={item}
              title={item.title}
              description={item.description}
              containsToggle={item.containsToggle}
              onPress={
                item.containsInnerScreens ? navigateToInnerScreen : showToast
              }
              onPressToggle={onPressToggle}
              toggleStatus={isLimitSet && index === 1}
            />
          ))}
      </View>
    );
  };

  const renderData = () => {
    // Extracting Response data through DataHandlers.get method to avoid null handling
    const cardDetails = DataHandlers.get(data, 'cardDetail');
    const cardNumber = DataHandlers.get(data, 'cardDetail.number');
    const cvv = DataHandlers.get(data, 'cardDetail.cvv');
    const validThrough = DataHandlers.get(data, 'cardDetail.validThrough');
    const cardHolderName = DataHandlers.get(data, 'cardDetail.cardHolderName');
    return (
      <View>
        <Background style={styles.headingContainer}>
          {renderHeaderDetails()}
        </Background>
        <View style={styles.card}>
          <Card
            data={cardDetails}
            cardNumber={cardNumber}
            cvv={cvv}
            validThrough={validThrough}
            cardHolderName={cardHolderName}
          />
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
