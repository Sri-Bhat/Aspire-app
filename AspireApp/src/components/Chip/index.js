import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

Chip.propTypes = {
  value: PropTypes.string,
};

Chip.defaultProps = {
  value: 'S$',
};

export default function Chip(props) {
  const {value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    borderRadius: Scaling.ms(4),
    padding: Scaling.ms(4),
    minWidth: Scaling.sw(40),
    height: Scaling.sh(22),
  },
  value: {
    fontSize: Scaling.ms(12),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
