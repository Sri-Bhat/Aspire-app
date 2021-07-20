import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../assets/images';
import Background from '../../components/Background';
import Logo from '../../assets/images/logos/Logo.svg';
import {styles} from './styles';
import CommonStyles from '../../utils/commonStyles';
import Chip from '../../components/Chip';
import {Colors} from '../../assets/colors';
import DataHandlers from '../../utils/datahandlers';
import {Button} from '../../components';
import {AspireContext} from '../../context';
import {Constants} from '../../localization';

export default function SpendingLimit(props) {
  const {navigation} = props;

  // Extracting dataHanlers and Limit value  from Context
  const context = useContext(AspireContext);
  const datahandlers = context && context.dataHandlers;
  const {saveSpentLimit} = datahandlers;
  const {spentLimit} = context;

  const [currency, setCurrency] = useState(spentLimit ? spentLimit : '');
  const [disabled, setDisabled] = useState(currency <= 0);

  useEffect(() => {
    if (currency) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [currency, disabled]);

  useEffect(() => {
    if (spentLimit) setCurrency(spentLimit);
  }, [spentLimit]);

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
          <Text style={CommonStyles.boldText}>{Constants.spending}</Text>
        </View>
      </Background>
    );
  };

  const onPressChips = text => {
    setCurrency(text.toString());
  };

  const renderBody = () => {
    return (
      <Background style={styles.bodyConatiner}>
        <View style={styles.label}>
          <Image source={Images.saveIcon} />
          <Text style={styles.labelText}>{Constants.weeklySetMsg}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Chip />
          <TextInput
            value={DataHandlers.numberWithCommas(currency)}
            keyboardType={'number-pad'}
            style={{...CommonStyles.boldText, ...styles.inputText}}
            onChangeText={text => {
              if (
                (DataHandlers.ValidateFloating(text.replace(/,/g, '')) &&
                  text.length < 12) ||
                text == ''
              ) {
                setCurrency(text.replace(/,/g, ''));
              }
            }}
            placeholder={'Type Here '}
          />
        </View>
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>{Constants.weelySetMore}</Text>
        </View>
        <View style={styles.chipes}>
          {Constants.suggestions.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onPressChips(item)}>
              <Chip
                textStye={styles.chipText}
                background={Colors.green}
                style={styles.chip}
                value={'S$ ' + item.toLocaleString()}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View
          pointerEvents={disabled ? 'none' : 'auto'}
          style={styles.buttonContainer}>
          <Button
            isDisabled={disabled}
            onPress={() => {
              // on Press Save: Limit value gets stored in React contect
              saveSpentLimit(currency);
              navigation.goBack();
            }}
          />
        </View>
      </Background>
    );
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {renderHeadingPart()}
      {renderBody()}
    </KeyboardAwareScrollView>
  );
}
