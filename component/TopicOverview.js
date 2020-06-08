import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const TopicOverview = ({click, name, date, description}) => {
  return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={click}>
          <Text style={styles.topicName}>{name}</Text>
          <View style={styles.details}>
            <Text style={styles.dateTxt}>{date}</Text>
            <Text style={styles.descriptionTxt}>{description}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#0E7DDF',
    borderRadius: 20
  },
  topicName: {
    fontSize: 24,
    marginTop: 10,
    marginHorizontal: 10
  },
  details: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  dateTxt: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  descriptionTxt: {
    fontSize: 18
  }
});
