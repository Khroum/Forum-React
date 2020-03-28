import {Navigation} from "react-native-navigation";
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class TopicsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <Text>Topics</Text>
        </View>
    )
  }
}

const styles =StyleSheet.create({
  mainContainer: {
    margin: 5
  }
});