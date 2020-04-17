import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ConfirmBtn} from "../component/ConfirmBtn";
import {goToScreen} from "../utils/navbarHelper";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.dataContainer}>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Username:</Text>
              <TextInput style={styles.inputData}/>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Email:</Text>
              <TextInput style={styles.inputData}/>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Password:</Text>
              <TextInput style={styles.inputData}/>
            </View>
          </View>
          <View style={styles.centered}>
            <ConfirmBtn onPress={() => goToScreen(this.props.componentId, 'LoginPage')}
                        content={'Create an account'}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
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
