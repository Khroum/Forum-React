import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ConfirmBtn} from '../component/ConfirmBtn';
import {GoToBtn} from '../component/GoToBtn';
import {
  API_URL,
  AUTH_HEADER,
  LOGIN_FAILED,
  LOGIN_FAILED_MESSAGE,
  OPERATION_FAILED,
  OPERATION_FAILED_MESSAGE,
  REGISTER_PAGE,
  TOPICS_PAGE,
} from '../utils/constants';
import {
  disableBackButton,
  disableNavbarMenu,
  goToScreen,
  goToScreenWithHeader,
} from '../utils/navbarHelper';
import {alert} from '../utils/infoHelper';
import {connect} from 'react-redux';
import {authSuccess} from '../actions/authenticationActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    disableNavbarMenu(this.props.componentId);
    disableBackButton(this.props.componentId);
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
        username: 'Andrew1',
        password: 'Forum55',
      }),
    })
      .then((response) => {
        if (response.ok) {
          let header = response.headers.get(AUTH_HEADER);
          this.props.authSuccess(header);
          this.resetAuthData();
          goToScreenWithHeader(this.props.componentId, TOPICS_PAGE, header);
        } else {
          this.wrongData(response);
        }
      })
      .catch((error) => {
        alert(OPERATION_FAILED, OPERATION_FAILED_MESSAGE);
        console.log(error);
      });
  };

  wrongData = (response) => {
    response.status === 401
      ? alert(LOGIN_FAILED, LOGIN_FAILED_MESSAGE)
      : alert(OPERATION_FAILED, OPERATION_FAILED_MESSAGE);
  };

  resetAuthData = () => {
    this.setState({
      username: '',
      password: '',
    });
    this.usernameInput.clear();
    this.passwordInput.clear();
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.dataWindow}>
            <Text style={styles.dataText}>Username:</Text>
            <TextInput
              style={styles.inputData}
              ref={(input) => {
                this.usernameInput = input;
              }}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={styles.dataWindow}>
            <Text style={styles.dataText}>Password:</Text>
            <TextInput
              style={styles.inputData}
              ref={(input) => {
                this.passwordInput = input;
              }}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
        </View>
        <View style={styles.centered}>
          <ConfirmBtn onPress={() => this.login()} content={'Login'} />
          <GoToBtn
            onPress={() => goToScreen(this.props.componentId, REGISTER_PAGE)}
            content={"Don't have an account?\nRegister here!"}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = {authSuccess};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    margin: 10,
  },
  dataContainer: {
    borderWidth: 1.5,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  inputData: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  dataWindow: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
