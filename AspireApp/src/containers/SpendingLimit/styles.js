import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerBackground: {
    padding: Scaling.ms(30),
    height: Scaling.shp(25),
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    height: Scaling.sh(20),
    width: Scaling.sh(20),
    tintColor: Colors.white,
  },
  textContainer: {
    marginTop: Scaling.sh(25),
  },
  bodyConatiner: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Scaling.ms(20),
    borderTopRightRadius: Scaling.ms(20),
    marginTop: Scaling.sh(-40),
    height: Scaling.shp(80),
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
  },
  labelText: {
    fontSize: Scaling.ms(14),
    marginLeft: Scaling.sw(15),
    color: Colors.voiletTertiary,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Scaling.sh(15),
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    paddingBottom: Scaling.sh(10),
    alignItems: 'center',
  },
  inputText: {
    color: Colors.voiletTertiary,
    marginLeft: Scaling.sw(20),
  },
  instructions: {
    marginTop: Scaling.sh(15),
  },
  instructionText: {
    fontSize: Scaling.ms(13),
    color: Colors.greyprime,
  },
  chipes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scaling.sh(20),
  },
  chip: {
    backgroundColor: Colors.greenSecondary,
    width: Scaling.sw(114),
  },
  chipText: {
    color: Colors.green,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: Scaling.sh(20),
    alignSelf: 'center',
  },
});
