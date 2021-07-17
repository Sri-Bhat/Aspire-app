import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../../assets';
import Scaling from '../../utils/scaling';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.green} size="small" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Scaling.shp(100),
    width: Scaling.swp(100),
    backgroundColor: Colors.semiTransparent,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
