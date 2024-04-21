import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function MainAddTask() {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.InputStyle} placeholder=" Do math homework" placeholderTextColor={'white'}></TextInput>
      <Text style={styles.textStyle}> Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,

  },
  textStyle: {
    color: "#AFAFAF",
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    paddingTop: 16,
  },
  InputStyle: {
    height: 43,
    width: '100%',
    fontFamily: 'Lato_400Regular',
    color: 'white', 
    fontSize: 18,

    borderColor: 'white',
    borderWidth: 1, // largura da borda
    padding: 10, // preenchimento interno
    borderRadius: 8,
   }
});
