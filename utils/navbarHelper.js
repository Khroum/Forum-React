import {Navigation} from "react-native-navigation";

export const goToScreen = (componentId, screenName) => {
  Navigation.push(componentId, {
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

export const hideNavbarMenu = (componentId) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: false
      }
    }
  });
};

export const disableNavbarMenu = (componentId) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        enabled: false
      }
    }
  });
};
