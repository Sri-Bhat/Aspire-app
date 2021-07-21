import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import CommonStyles from '../../utils/commonStyles';
import {Colors} from '../../assets/colors';
import {Scaling} from '../../utils';

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  label: 'Save',
};

export default function Button(props) {
  const {onPress, label, isDisabled} = props;

  const opacity = isDisabled ? 0.4 : 1;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...CommonStyles.container,
          ...styles.container,
          opacity,
        }}>
        <Text style={styles.lebel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    height: Scaling.sh(36),
    width: Scaling.sw(300),
    borderRadius: Scaling.ms(30),
  },
  lebel: {
    color: Colors.white,
    fontSize: Scaling.ms(16),
    fontWeight: 'bold',
  },
});
