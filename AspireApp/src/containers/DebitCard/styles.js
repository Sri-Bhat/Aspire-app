import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headingContainer: {
    height: Scaling.shp(40),
    position: 'relative',
  },
  text: {
    marginTop: Scaling.sh(20),
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
  cardContainer: {
    marginTop: Scaling.sh(150),
  },
  card: {
    position: 'absolute',
    width: '100%',
    marginTop: Scaling.shp(20),
    zIndex: 2,
    padding: Scaling.sw(24),
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  progresLables: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  instruction: {
    color: Colors.voilet,
    fontSize: Scaling.ms(13),
  },
  limitValue: {
    display: 'flex',
    flexDirection: 'row',
  },
  limit: {
    color: Colors.green,
    fontSize: Scaling.ms(13),
    fontWeight: 'bold',
  },
  value: {
    color: Colors.grey,
    fontSize: Scaling.ms(13),
    fontWeight: 'bold',
  },
  progres: {
    marginTop: Scaling.sh(10),
    marginBottom: Scaling.sh(15),
  },
});
