import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import HeaderAddTask from "./HeaderAddTask";

export default function ScreenAddTask() {
  return <View style={styles.mainContainer}>
    <HeaderAddTask/>
    <MainAddTask/>
    <FotterAddTask/>
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
