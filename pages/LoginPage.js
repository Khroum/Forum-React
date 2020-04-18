import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ConfirmBtn} from "../component/ConfirmBtn";
import {GoToBtn} from "../component/GoToBtn";
import {API_URL, AUTH_HEADER, REGISTER_PAGE, TOPICS_PAGE} from "../utils/constants";
import {disableNavbarMenu, goToScreen, goToScreenWithHeader} from "../utils/navbarHelper";

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    disableNavbarMenu(this.props.componentId);
  }

  login = () => {
    const {username, password} = this.state;
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then((response) => {
        let header = response.headers.get(AUTH_HEADER);
        this.resetAuthData();
        goToScreenWithHeader(this.props.componentId, TOPICS_PAGE, header)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  resetAuthData = () => {
    this.setState({
      'username': '',
      'password': ''
    });
  };

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.dataContainer}>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Username:</Text>
              <TextInput style={styles.inputData} onChangeText={text => this.setState({username: text})}/>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Password:</Text>
              <TextInput style={styles.inputData} onChangeText={text => this.setState({password: text})}/>
            </View>
          </View>
          <View style={styles.centered}>
            <ConfirmBtn onPress={() => this.login()}
                        content={'Login'}/>
            <GoToBtn onPress={() => goToScreen(this.props.componentId, REGISTER_PAGE)}
                     content={'Don\'t have an account?\nRegister here!'}/>
          </View>
        </View>
    );
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
