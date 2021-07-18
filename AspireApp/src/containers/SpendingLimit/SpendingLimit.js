import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets/images';
import Background from '../../components/Background';
import Logo from '../../assets/images/logos/Logo.svg';
import {styles} from './styles';
import CommonStyles from '../../utils/commonStyles';
import Chip from '../../components/Chip';

export default function SpendingLimit(props) {
  const {navigation} = props;
  const renderHeadingPart = () => {
    return (
      <Background style={styles.headerBackground}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={Images.backButton} style={styles.backButton} />
          </TouchableOpacity>
          <Logo width="26" height="26" />
        </View>
        <View style={styles.textContainer}>
          <Text style={CommonStyles.boldText}>Spending limit</Text>
        </View>
      </Background>
    );
  };

  const renderBody = () => {
    return (
      <Background style={styles.bodyConatiner}>
        <View style={styles.label}>
          <Image source={Images.saveIcon} />
          <Text style={styles.labelText}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Chip />
          <TextInput
            value={'5,000'}
            style={{...CommonStyles.boldText, ...styles.inputText}}
          />
        </View>
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
        </View>
        <View></View>
      </Background>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeadingPart()}
      {renderBody()}
    </View>
  );
}
