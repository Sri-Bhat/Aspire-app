import {Colors} from '../assets/colors';
import Scaling from './scaling';

// This is the common styles which are normally used in multiple times in our code
export default class CommonStyles {
  static boldText = {
    fontSize: Scaling.ms(24),
    fontWeight: 'bold',
    color: Colors.white,
  };

  static container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
}
