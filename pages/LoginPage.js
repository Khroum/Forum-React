import {Navigation} from "react-native-navigation";
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: false
        }
      }
    });
  }

  render() {
    return (
        <View style={styles.login}>
          <Text>Login Page</Text>
        </View>
    );
  }
}

const styles =StyleSheet.create({
  login: {
  }
});