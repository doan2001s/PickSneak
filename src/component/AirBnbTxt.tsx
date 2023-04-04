import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AirBnbText = ({fontSize}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize } ]}>P</Text>
      <Text style={[styles.text, { fontSize } ]}>I</Text>
      <Text style={[styles.text, { fontSize } ]}>C</Text>
      <Text style={[styles.text, { fontSize } ]}>K</Text>
      <Text style={[styles.text, { fontSize } ]}>S</Text>
      <Text style={[styles.text, { fontSize } ]}>N</Text>
      <Text style={[styles.text, { fontSize } ]}>E</Text>
      <Text style={[styles.text, { fontSize } ]}>A</Text>
      <Text style={[styles.text, { fontSize } ]}>K</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily:'PlayfairDisplay-SemiBoldItalic',
    fontSize: 38,
    fontWeight: 'bold',
    color: 'silver',
    marginHorizontal: 0.5,
  },
});