import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTyps from 'prop-types';
import {Images} from '../../assets';
import {Colors} from '../../assets/colors';
import {Constants} from '../../localization';
import CommonStyles from '../../utils/commonStyles';
import DataHandlers from '../../utils/datahandlers';
import Scaling from '../../utils/scaling';

Card.prototype = {
  data: PropTyps.object,
};

Card.defaultProps = {
  data: {},
};

export default function Card(props) {
  const {data} = props;
  const cardHolderName = DataHandlers.get(data, 'cardHolderName');
  const cardNumber = DataHandlers.get(data, 'number');
  const validThrough = DataHandlers.get(data, 'validThrough');
  const cvv = DataHandlers.get(data, 'cvv');
  const [showNumber, setShowNumber] = useState(false);
  const [manageMsg, setmanageMsg] = useState(Constants.showcard);
  const [icon, setIcon] = useState(Images.eye);
  const cardArray = DataHandlers.getCardNumberArray(cardNumber);

  useEffect(() => {
    if (showNumber) {
      setmanageMsg(Constants.hideCard);
      setIcon(Images.eyeHide);
    } else {
      setmanageMsg(Constants.showcard);
      setIcon(Images.eye);
    }
  }, [showNumber]);

  return (
    <View>
      <TouchableOpacity
        style={styles.top}
        onPress={() => setShowNumber(prevState => !prevState)}>
        <Image source={icon} style={styles.eyeIcon} />
        <Text style={styles.showtext}>{manageMsg}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={Images.logoWithText} style={styles.logo} />
        <Text style={{...CommonStyles.boldText, ...styles.cardHolder}}>
          {cardHolderName}
        </Text>
        <View style={styles.cardNumber}>
          {cardArray.map((item, index) => {
            const isFirstpart = index < 3;
            return (
              <View key={index} style={index !== 0 && styles.section}>
                {
                  <TextInput
                    style={{
                      ...CommonStyles.boldText,
                      ...styles.num,
                    }}
                    editable={false}
                    secureTextEntry={isFirstpart && !showNumber}
                    value={item}
                  />
                }
              </View>
            );
          })}
        </View>
        <View style={styles.others}>
          <Text style={styles.otherText}>Thru: {validThrough}</Text>
          <Text style={{...styles.otherText, ...styles.cvv}}>
            CVV: {showNumber ? cvv : '***'}
          </Text>
        </View>
        <Image source={Images.visa} style={styles.cardType} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
  },
  container: {
    position: 'relative',
    backgroundColor: Colors.green,
    minHeight: Scaling.sh(160),
    width: Scaling.swp(100),
    padding: Scaling.sw(24),
    borderRadius: Scaling.sw(15),
    marginTop: Scaling.sh(-22),
  },
  top: {
    backgroundColor: Colors.white,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: Scaling.sw(151),
    height: Scaling.sh(44),
    alignSelf: 'flex-end',
    padding: Scaling.ms(6),
    borderRadius: Scaling.ms(6),
    marginRight: Scaling.sw(0.5),
  },
  showtext: {
    color: Colors.green,
    fontSize: Scaling.ms(12),
    marginLeft: Scaling.sw(7),
  },
  eyeIcon: {
    marginLeft: Scaling.sw(5),
  },
  logo: {
    alignSelf: 'flex-end',
  },
  cardHolder: {
    marginTop: Scaling.sh(15),
  },
  cardNumber: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Scaling.sh(20),
  },
  section: {
    marginLeft: Scaling.sw(3),
  },
  num: {
    fontSize: Scaling.ms(20),
    alignSelf: 'center',
    letterSpacing: 2,
  },
  normalNum: {
    fontWeight: 'normal',
  },
  others: {
    marginTop: Scaling.sh(10),
    display: 'flex',
    flexDirection: 'row',
  },
  otherText: {
    color: Colors.white,
    fontSize: Scaling.ms(13),
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  cvv: {
    marginLeft: Scaling.sw(20),
  },
  cardType: {
    alignSelf: 'flex-end',
  },
});
