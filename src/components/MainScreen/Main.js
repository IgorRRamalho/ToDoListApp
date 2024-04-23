import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { loadTasks } from "../../Screens/ScreenAddTask";
import MainTask from "../../Screens/MainTask";

export default function Main() {
  
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../../assets/centro-menu.png")}
        style={styles.mainImg}
      />
       <View style={styles.viewTxt}> 
        <Text style={[styles.mainText, {paddingTop: 50}]}> What do you want to do today?</Text>
        <Text style={[styles.mainText, {paddingTop: 15}, {fontSize: 16}]}> Tap + to add your tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    //  backgroundColor: "red",
    marginTop: 120,
  },
  mainText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: 400,
    fontFamily: "Lato_400Regular",
  },
  mainImg: {
    width: 227,
    height: 227,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTxt: {
    flex: 1,
    marginTop: -40,

  }
});
