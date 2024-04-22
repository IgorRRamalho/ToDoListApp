import React from "react";
import { TextInput, View, Text, StyleSheet, Image } from "react-native";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
     
      <View style={styles.viewImg}>
        <Image
           source={require("../../../assets/centro-menu.png")}
           style={styles.mainImg}
        />
      </View>

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
    paddingHorizontal: 10,
  },
  mainText: {
    textAlign: "center",
    fontSize: 20,
    color: "white", 
    fontWeight: 400,
    fontFamily: 'Lato_400Regular',
  },
  mainImg: {
    width: 227, 
    height: 227,
  },
  viewImg: {
    marginBottom: -50,
    paddingTop: 82,
  },
  viewTxt: {
    flex: 1
  }
  
});
