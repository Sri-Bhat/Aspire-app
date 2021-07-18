import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
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

  const [disabledStyle, setDisable] = useState(styles.disabled);

  useEffect(() => {
    const disableStyle = isDisabled ? styles.disabled : styles.normal;
    setDisable(disableStyle);
  }, [isDisabled]);

  return (
    <TouchableOpacity
      style={{...CommonStyles.container, ...styles.container, ...disabledStyle}}
      onPress={onPress}>
      <Text style={styles.lebel}>{label}</Text>
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
  disabled: {
    opacity: 0.4,
  },
  normal: {
    opacity: 1,
  },
});
