import React from 'react';
import {Navigation} from "react-native-navigation";
import Drawer from "./containers/Drawer";
import { Dimensions } from 'react-native';
import LoginPage from "./pages/LoginPage";
import {View} from 'react-native';

export const App = () => {
  return (
      <View />
  )
};

Navigation.registerComponent(`Drawer`, () => Drawer);
Navigation.registerComponent(`LoginPage`, () => LoginPage);

const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: false,
      animate: false,
      borderHeight: 1,
      buttonColor: 'white',
      backButton: {
        color: 'white'
      },
      title: {
        color: 'white',
        alignment: 'center',
        text: 'Talkerr'
      },
      background: {
        color: '#0E7DDF'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  name: 'LoginPage',
                }
              },
            ]
          }
        }
      },
    }
  });
});
