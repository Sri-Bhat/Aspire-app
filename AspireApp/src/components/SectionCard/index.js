import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../assets/colors';
import {Images} from '../../assets/images';
import {Scaling} from '../../utils';

export default function SectionCard(props) {
  const {
    data,
    title,
    description,
    containsToggle,
    toggleStatus,
    onPress,
    onPressToggle,
  } = props;
  const image = Images.debitSections[data.key];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      <Image source={image} />
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {containsToggle && (
        <View style={styles.toggle}>
          <ToggleSwitch
            isOn={toggleStatus}
            onColor={Colors.green}
            offColor={Colors.greySecondary}
            size="small"
            onToggle={onPressToggle}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Scaling.sh(10),
    paddingBottom: Scaling.sh(10),
    width: Scaling.swp(100),
  },
  textArea: {
    marginLeft: Scaling.sw(20),
  },
  title: {
    color: Colors.voiletSecondary,
    fontSize: Scaling.ms(14),
  },
  description: {
    color: Colors.voiletTertiary,
    opacity: 0.4,
    fontSize: Scaling.ms(13),
  },
  toggle: {
    position: 'absolute',
    right: Scaling.sw(0),
    top: Scaling.sh(8),
  },
});
