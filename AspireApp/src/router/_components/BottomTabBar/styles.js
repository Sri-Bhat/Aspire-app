import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';
import {Scaling} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Scaling.sw(15),
  },
  textNormal: {
    color: Colors.grey,
  },
  textSelected: {
    color: Colors.green,
  },
});
