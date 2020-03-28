import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const RegisterBtn = ({onPress, content}) => {
  return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btnText}>{content}</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    borderRadius: 20,
    width: '85%',
    maxWidth: 350,
    minWidth: 250
  },
  btnText: {
    fontSize: 19,
    padding: 5,
    alignSelf: 'center',
    color: '#0E7DDF'
  }
});