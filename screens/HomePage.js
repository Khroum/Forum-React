import React, {Component} from 'react';
import {Text, View, Button, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: screenName
            },
          }
        }
      }
    })
  };

  render() {
    return (
      <View>
        <ScrollView >
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <Button onPress={() => this.goToScreen('Test')} title={'Test'}>Test</Button>
          <View style={styles.footer}>
            <Text >Get to know uor exams results</Text>
            <Button onPress={() => this.goToScreen('Results')} title={'Results'}>Results</Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 18,
    borderWidth: 1,
    justifyContent: 'center'
  }
});
