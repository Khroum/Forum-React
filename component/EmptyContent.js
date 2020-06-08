import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class EmptyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  componentWillMount = async () => {
    try {
      const value = await AsyncStorage.getItem('content');
      if(value == null) {
        this.setModalVisible(true)
      }
      await AsyncStorage.setItem('content', JSON.stringify({'value': 'true'}))
    } catch (e) {}
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    return (
        <View>
          <Modal
              animationType={"slide"}
              transparent={true}
              style={styles.container}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert("Done!");
              }}
          >
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Empty content</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>It looks like there is no content. Maybe you should change it?</Text>
              </View>
              <View style={styles.exitContainer}>
                <TouchableHighlight onPress={() => {this.setModalVisible(false)}}>
                  <View style={styles.exitButtonContainer}>
                    <Text style={styles.exitButtonText}>Thanks!</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#0E7DDF'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 22,
    marginRight: 20,
    marginLeft: 20
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionContainer: {
    flex: 6.5
  },
  exitContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  exitButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#0E7DDF',
    borderRadius: 20,
    justifyContent: 'center',
  },
  exitButtonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
