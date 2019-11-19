/** @format */

import {Navigation} from 'react-native-navigation';
import App from './App';
import HomePage from './screens/HomePage'
import Test from './screens/Test';
import Results from './screens/Results';

Navigation.registerComponent(`HomePage`, () => HomePage);
Navigation.registerComponent(`Results`, () => Results);
Navigation.registerComponent(`Test`, () => Test);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'HomePage'
            }
          }
        ]
      }
    }
  });
});
