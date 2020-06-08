import {ActivityIndicator, View} from 'react-native';
import React from 'react';

export const Loader = () => {
  return (
      <View>
        <ActivityIndicator size="large" color="#0E7DDF" />
      </View>
  )
};
