import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ButonnAdd() {
  return (
       <View style={styles.circle}>
      <Image
      source={require("../../../assets/Home Screen/Ellipse 14.png")}
      style={styles.imgSize}
    />
        <Text style={styles.plus}>+</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    /* top: height * -0.05,
    backgroundcolor: '#8687e7',
    justifycontent: 'center',
    alignitems: 'center',
    width: 100, 
    height: 100, 
    borderradius: 60,  */
  },
  plus: {
    position: 'absolute',
    color: 'white',
    fontSize: 60,
    fontWeight: '300',
  },
});
