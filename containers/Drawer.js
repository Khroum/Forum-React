import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {goToScreen, hideNavbarMenu} from "../utils/navbarHelper";

export default class Drawer extends Component {

  goToScreen = (screenName) => {
    hideNavbarMenu('drawerId');
    goToScreen('MAIN_STACK', screenName);
  };

  render() {
    return (
      <View>
        <Text>Drawer</Text>
        <TouchableOpacity onPress={() => this.goToScreen('TopicsPage')}>
          <Text>Topics</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
