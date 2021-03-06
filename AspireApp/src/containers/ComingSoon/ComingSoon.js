import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text} from 'react-native';
import {Actions} from '../../redux';
import Logo from '../../assets/images/logos/Logo.svg';
import {styles} from './styles';
import {Constants} from '../../localization';

// This is a placeholder Screen:
const ComingSoon = function (props) {
  return (
    <View style={styles.container}>
      <Logo width="200" height="100" />
      <Text style={styles.comingSoon}>{Constants.comingSoon}</Text>
    </View>
  );
};

// Just added redux Here: (But not used much) (Code level it has configured)
function mapStateToProps(state) {
  return {
    debitcardDetails: state.debitcardDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
