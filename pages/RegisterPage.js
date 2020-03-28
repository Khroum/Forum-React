import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <Text>Register</Text>
        </View>
    )
  }
}

const styles =StyleSheet.create({
  mainContainer: {
    margin: 5
  }
});