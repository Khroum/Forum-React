import {Navigation} from 'react-native-navigation';

export const goToScreen = (componentId, screenName) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          title: {
            text: screenName,
          },
        },
      },
    },
  });
};

export const goToScreenWithProps = (
  componentId,
  screenName,
  header,
  objectId,
) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          title: {
            text: screenName,
          },
        },
      },
      passProps: {
        header: header,
        objectId: objectId,
      },
    },
  });
};

export const goToScreenWithHeader = (componentId, screenName, header) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          title: {
            text: screenName,
          },
        },
      },
      passProps: {
        header: header,
      },
    },
  });
};

export const hideNavbarMenu = (componentId) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: false,
      },
    },
  });
};

export const disableNavbarMenu = (componentId) => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        enabled: false,
      },
    },
  });
};

export const disableBackButton = (componentId) => {
  Navigation.mergeOptions(componentId, {
    topBar: {
      backButton: {
        showTitle: false,
        visible: false,
      },
    },
  });
};
