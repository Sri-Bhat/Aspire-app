import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headingContainer: {
    height: Scaling.shp(40),
  },
  text: {
    marginTop: Scaling.sh(25),
  },
  heading: {
    display: 'flex',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceConatiner: {
    marginTop: Scaling.sh(25),
  },
  balanceText: {
    color: Colors.white,
    fontSize: Scaling.ms(14),
  },
  currencySection: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Scaling.sh(18),
    alignItems: 'center',
  },
  currency: {
    marginLeft: Scaling.sw(10),
  },
  bodyContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Scaling.sw(30),
    borderTopRightRadius: Scaling.sw(30),
    marginTop: Scaling.sh(-30),
  },
});
