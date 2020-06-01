import React from 'react';
import {Navigation} from 'react-native-navigation';
import Drawer from './containers/Drawer';
import {Dimensions} from 'react-native';
import LoginPage from './pages/LoginPage';
import {View} from 'react-native';
import TopicsPage from './pages/TopicsPage';
import RegisterPage from './pages/RegisterPage';
import PostsPage from './pages/PostsPage';
import {Provider} from 'react-redux';
import {store} from './store/store';
import AddPostPage from './pages/AddPostPage';

export const App = () => {
  return <View />;
};

Navigation.registerComponentWithRedux(`Drawer`, () => Drawer, Provider, store);
Navigation.registerComponentWithRedux(
  `LoginPage`,
  () => LoginPage,
  Provider,
  store,
);
Navigation.registerComponent(`TopicsPage`, () => TopicsPage);
Navigation.registerComponent(`PostsPage`, () => PostsPage);
Navigation.registerComponent(`RegisterPage`, () => RegisterPage);
Navigation.registerComponent(`AddPostPage`, () => AddPostPage);

const {width} = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: false,
      animate: false,
      buttonColor: 'white',
      backButton: {
        color: 'white',
      },
      title: {
        color: 'white',
        alignment: 'center',
        text: 'Talkerr',
        fontSize: 28,
      },
      background: {
        color: '#0E7DDF',
      },
    },
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width,
          },
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  name: 'LoginPage',
                },
              },
            ],
          },
        },
      },
    },
  });
});
