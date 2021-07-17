import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {DataHandlers} from '../../../utils';
import {Images} from '../../../assets';

export default function BottomTabBar(props) {
  const [currentTab, setcurrentTab] = useState(0);
  const tabs = DataHandlers.get(props, 'navigation.state.routes');

  const onPressTab = (index, routeName) => {
    const {navigation} = props;
    setcurrentTab(index);
    navigation.navigate(routeName);
  };

  const renderTab = (name, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressTab(index, name)}>
        <Image
          source={Images.tabs[index]}
          style={{
            ...styles.image,
            ...(index === currentTab ? styles.selectedImage : {}),
          }}
        />
        <Text
          style={{
            ...styles.textNormal,
            ...(index === currentTab ? styles.textSelected : {}),
          }}
          key={index}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {tabs && tabs.map((item, index) => renderTab(item.routeName, index))}
    </View>
  );
}
