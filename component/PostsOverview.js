import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const PostOverview = ({click, content, date, author}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={click}>
        <View style={styles.details}>
          <Text style={styles.detailsTxt}>{`${author}, ${date}`}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
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
    borderRadius: 20,
  },
  content: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  details: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  detailsTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
