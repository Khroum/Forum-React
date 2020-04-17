import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {goToScreen, hideNavbarMenu} from "../utils/navbarHelper";
import Icon from 'react-native-vector-icons/FontAwesome';
import {GoToBtn} from "../component/GoToBtn";

export default class Drawer extends Component {

  goToScreen = (screenName) => {
    hideNavbarMenu('drawerId');
    goToScreen('MAIN_STACK', screenName);
  };

  render() {
    return (
        <View style={styles.drawerContainer}>
          <Text style={styles.titleTxt}>Talkerr</Text>
          <View style={styles.logoContainer}>
            <Icon style={styles.icon} name='wechat' size={125}/>
          </View>
          <View style={styles.btnContainer}>
            <GoToBtn onPress={() => this.goToScreen('TopicsPage')}
                     content={'Topics page'}
                     style={{borderWidth: 1.5, borderRadius: 20, borderColor: '#0E7DDF'}}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoContainer: {
    margin: 10,
    alignItems: 'center'
  },
  titleTxt: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  icon: {
    color: '#0E7DDF'
  },
  btnContainer: {
    margin: 10
  }
});
