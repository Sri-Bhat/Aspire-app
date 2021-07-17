import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  text: {
    fontSize: Scaling.ms(24),
    fontWeight: 'bold',
    color: Colors.white,
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
  },
});
