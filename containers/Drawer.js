import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Navigation} from "react-native-navigation";

export default class Drawer extends Component {

  goToScreen = (screenName) => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    });
    Navigation.push('MAIN_STACK', {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: screenName
            }
          }
        }
      }
    })
  };

  render() {
    return (
      <View>
        <Text>Drawer</Text>
      </View>
    );
  }
}
