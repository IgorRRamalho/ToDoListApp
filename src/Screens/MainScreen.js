import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/MainScreen/Header";
import Main from "../components/MainScreen/Main";
import Fotter from "../components/MainScreen/Fotter";
import { useState } from "react";



export default function MainScreen() {

    return (
      <View style={styles.containerMain}>
        {/* <StatusBar barStyle="default"/> */}
        <Header />
        <Main />
        <Fotter />

      </View>
    );
  }

  const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 70,
      backgroundColor: "#121212",
    },
});