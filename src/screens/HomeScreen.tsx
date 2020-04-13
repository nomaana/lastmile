import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, Alert} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          // onPress={() => this.props.navigation.navigate('ManageAddressScreen')}
          style={styles.textStyle}>
          Welcome To Home Screen
        </Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    paddingVertical: 10,
  },
});
export default HomeScreen;
