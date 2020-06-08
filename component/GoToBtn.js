import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const GoToBtn = ({onPress, content, style}) => {
  return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress} >
          <Text style={[styles.btnText, style]}>{content}</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    maxWidth: 350,
    minWidth: 225,
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 19,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#0E7DDF'
  }
});
