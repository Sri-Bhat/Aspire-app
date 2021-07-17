import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../assets/colors';
import Scaling from '../../utils/scaling';
import PropTypes from 'prop-types';

Background.propTypes = {
  style: PropTypes.object,
};

Background.defaultProps = {
  style: {},
};

export default function Background(props) {
  const {style} = props;
  return <View style={{...styles.conatiner, ...style}}>{props.children}</View>;
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    backgroundColor: Colors.voilet,
    padding: Scaling.sw(24),
    height: Scaling.shp(100),
    width: Scaling.swp(100),
  },
});
