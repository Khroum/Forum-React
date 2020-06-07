import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {API_URL} from '../utils/constants';
import {Loader} from './Loader';
import {formatToDateTime} from '../utils/dateFormatter';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      user: {
        login: '',
        registeredOn: '',
        email: '',
      },
      header: '',
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = () => {
    const {header} = this.props;
    fetch(`${API_URL}/user/`, {
      headers: {
        Authorization: `${header}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('profile: ', json);
        this.setState({
          user: json,
          header: header,
          isFetching: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const {login, registeredOn, email} = this.state.user;
    if (this.state.isFetching === true) {
      return <Loader />;
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.dataContainer}>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Username: {login}</Text>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>Email: {email}</Text>
            </View>
            <View style={styles.dataWindow}>
              <Text style={styles.dataText}>
                With us sinces: {formatToDateTime(registeredOn)}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

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
  dataText: {
    fontSize: 20,
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
