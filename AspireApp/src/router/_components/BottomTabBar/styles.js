import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets';
import {Scaling} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Scaling.sw(15),
    borderTopColor: Colors.grey,
    borderTopWidth: Scaling.ms(1),
    backgroundColor: Colors.white,
    paddingLeft: Scaling.sw(31),
    paddingRight: Scaling.sw(31),
    height: Scaling.sh(56),
  },
  textNormal: {
    color: Colors.grey,
    fontSize: Scaling.ms(9),
    marginTop: Scaling.sh(4),
  },
  textSelected: {
    color: Colors.green,
  },
  image: {
    alignSelf: 'center',
    tintColor: Colors.grey,
  },
  selectedImage: {
    tintColor: Colors.green,
  },
});
