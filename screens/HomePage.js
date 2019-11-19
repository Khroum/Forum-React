import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  goTo = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  };

  render() {
    return (
      <View>
        <Button onPress={() => this.goTo('Results')} title={'Results'}>Results</Button>
        <Button onPress={() => this.goTo('Test')} title={'Test'}>Test</Button>
      </View>
    );
  }
}
