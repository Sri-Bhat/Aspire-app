import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../assets';
import {Colors} from '../../assets/colors';
import CommonStyles from '../../utils/commonStyles';
import DataHandlers from '../../utils/datahandlers';
import Scaling from '../../utils/scaling';

export default function Card(props) {
  const {data} = props;
  const [showNumber, setShowNumber] = useState(false);
  const [manageMsg, setmanageMsg] = useState('hii');
  const cardArray = DataHandlers.getCardNumberArray('1234567890123456');

  useEffect(() => {
    if (showNumber) {
      setmanageMsg('Hi2');
    } else {
      setmanageMsg('Hi1');
    }
  }, [showNumber]);

  return (
    <View>
      <TouchableOpacity
        style={styles.top}
        onPress={() => {
          console.log('On press called');
          setShowNumber(prevState => !prevState);
        }}>
        <Image source={Images.eye} style={styles.eyeIcon} />
        <Text style={styles.showtext}>{manageMsg}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={Images.logoWithText} style={styles.logo} />
        <Text style={{...CommonStyles.boldText, ...styles.cardHolder}}>
          Mark Henry
        </Text>
        <View style={styles.cardNumber}>
          {cardArray.map((item, index) => {
            const isFirstpart = index < 3;
            const normalStyle = isFirstpart ? {} : styles.normalNum;
            return (
              <View key={index} style={index !== 0 && styles.section}>
                {
                  <TextInput
                    style={{
                      ...CommonStyles.boldText,
                      ...styles.num,
                      ...normalStyle,
                    }}
                    editable={false}
                    secureTextEntry={isFirstpart}
                    value={item}
                  />
                }
              </View>
            );
          })}
        </View>
        <View style={styles.others}>
          <Text style={styles.otherText}>Thru: 12/22</Text>
          <Text style={{...styles.otherText, ...styles.cvv}}>CVV: ***</Text>
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