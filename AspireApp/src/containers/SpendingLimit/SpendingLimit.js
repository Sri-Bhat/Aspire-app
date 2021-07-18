import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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

export default function SpendingLimit(props) {
  const {navigation} = props;

  const [currency, setCurrency] = useState('');
  const [disabled, setDisabled] = useState(true);

  const context = useContext(AspireContext);
  const datahandlers = context && context.dataHandlers;
  const {saveSpentLimit} = datahandlers;
  const {spentLimit} = context;

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
          <Text style={CommonStyles.boldText}>Spending limit</Text>
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
          <Text style={styles.labelText}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Chip />
          <TextInput
            value={currency}
            keyboardType={'number-pad'}
            style={{...CommonStyles.boldText, ...styles.inputText}}
            onChangeText={text => {
              if (DataHandlers.ValidateFloating(text) || text == '') {
                setCurrency(text);
              }
            }}
            placeholder={'Type Here '}
          />
        </View>
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
        </View>
        <View style={styles.chipes}>
          {[5000, 10000, 20000].map((item, index) => (
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
              saveSpentLimit(currency);
              navigation.goBack();
            }}
          />
        </View>
      </Background>
    );
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      {renderHeadingPart()}
      {renderBody()}
    </KeyboardAwareScrollView>
  );
}
