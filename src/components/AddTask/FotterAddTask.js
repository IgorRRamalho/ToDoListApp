import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function FotterAddTask() {
  return <View style={styles.mainContainer}>
      <Text> Add Text</Text>
  </View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    backgroundColor: "#363636",
    position: "absolute",
    
  },
});
