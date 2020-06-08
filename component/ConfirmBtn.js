import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from "react";

export const ConfirmBtn = ({onPress, content}) => {
  return (
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btnText}>{content}</Text>
        </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  btnContainer: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#0E7DDF',
    width: '60%',
    maxWidth: 250,
    minWidth: 150
  },
  btnText: {
    fontSize: 24,
    padding: 5,
    alignSelf: 'center',
    color: 'white'
  }
});
