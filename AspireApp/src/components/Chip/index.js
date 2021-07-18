import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';

Chip.propTypes = {
  value: PropTypes.string,
  style: PropTypes.object,
  textStye: PropTypes.object,
};

Chip.defaultProps = {
  value: 'S$',
  style: {},
  textStye: {},
};

export default function Chip(props) {
  const {value, style, textStye} = props;
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={{...styles.value, ...textStye}}>{value}</Text>
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
