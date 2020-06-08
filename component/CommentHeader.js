import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {formatToDateTime} from "../utils/dateFormatter";

export const CommentHeader = ({author, date, content}) => {
  return (
      <View style={styles.footer}>
        <View style={styles.footerText}>
          <View style={styles.details}>
            <Text style={styles.detailsTxt}>{`${author}, ${formatToDateTime(date)}`}</Text>
          </View>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  footerText: {
    margin: 5
  },
  content: {
    textAlign: 'center',
    fontSize: 22,
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
