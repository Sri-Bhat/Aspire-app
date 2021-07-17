import {Colors} from '../assets/colors';
import Scaling from './scaling';

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
