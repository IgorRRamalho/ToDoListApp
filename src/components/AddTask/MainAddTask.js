import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function MainAddTask() {
  return <View style={styles.mainContainer}>
    <Text> a </Text>
  </View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    //  backgroundColor: "red",
    paddingHorizontal: 10,
  },
});
