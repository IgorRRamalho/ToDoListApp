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
   
  },
  headerText: {
   fontFamily: 'Lato_700Bold',
   color: 'white',
   fontSize: 20,
  },
});
