import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ButonnAdd() {
  return (
      <View style={styles.circle}>
        <Text style={styles.plus}>+</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    top: height * -0.05,
    backgroundColor: '#8687E7',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, 
    height: 100, 
    borderRadius: 60,
  },
  plus: {
    color: 'white',
    fontSize: 60,
    fontWeight: '300',
  },
});
