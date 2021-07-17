import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import {DataHandlers} from '../../../utils';

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
      <TouchableHighlight>
        <Text
          style={{
            ...styles.textNormal,
            ...(index === currentTab ? styles.textSelected : {}),
          }}
          key={index}
          onPress={() => onPressTab(index, name)}>
          {name}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {tabs && tabs.map((item, index) => renderTab(item.routeName, index))}
    </View>
  );
}
