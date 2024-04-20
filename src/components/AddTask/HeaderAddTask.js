import { Lato_700Bold } from "@expo-google-fonts/lato";
import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";


export default function HeaderAddTask() {
  return <View style={styles.headerContainer}>
      
    <Text style={styles.headerText}>Add Task</Text>
  </View>;
}

const styles = StyleSheet.create({
  headerContainer: {
   /*  flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: '#363636', */
  },
  headerText: {
   
  },
});
