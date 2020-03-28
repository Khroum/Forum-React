import {Navigation} from "react-native-navigation";
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {LoginBtn} from "../component/LoginBtn";
import {RegisterBtn} from "../component/RegisterBtn";

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: false
        }
      }
    });
  }

  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
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
        <View style={styles.mainContainer}>
          <View style={styles.dataContainer}>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Username:</Text>
              <TextInput style={styles.inputData}/>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Password:</Text>
              <TextInput style={styles.inputData}/>
            </View>
          </View>
          <View style={styles.centered}>
            <LoginBtn onPress={() => this.goToScreen('TopicsPage')}/>
            <RegisterBtn onPress={() => this.goToScreen('RegisterPage')}
                         content={'Don\'t have an account? Register here!'}/>
          </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    margin: 10
  },
  dataContainer: {
    borderWidth: 1.5,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  inputData: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18
  },
  dataWindow: {
    marginVertical: 10,
    marginHorizontal: 5
  }
});