import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const AddNewFooter = ({onPress, content}) => {
  return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>{content}</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Do it!</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#0E7DDF',
    borderRadius: 20
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22
  },
  btn: {
    alignItems: 'center',
    marginTop: 10,
    margin: 10,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 50,
    paddingVertical: 10
  }
});
