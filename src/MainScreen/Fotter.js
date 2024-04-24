import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButonnAdd from "../components/ButonnAdd";

export default function Fotter() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewTab}>
        <Image
          source={require("../../assets/Home Screen/index.png")}
          style={styles.imgSize}
        />
        <Text style={styles.mainText}>Index</Text>
      </View>

      <View style={styles.viewTab}>
        <Image
          source={require("../../assets/Home Screen/calendar.png")}
          style={styles.imgSize}
        />
        <Text style={styles.mainText}>Calendar</Text>
      </View>

      <View style={styles.addView}>
        <ButonnAdd />
      </View>

      <View style={styles.viewTab}>
        <Image
          source={require("../../assets/Home Screen/clock.png")}
          style={styles.imgSize}
        />
        <Text style={styles.mainText}>Focuse</Text>
      </View>

      <View style={styles.viewTab}>
        <Image
          source={require("../../assets/Home Screen/user.png")}
          style={styles.imgSize}
        />
        <Text style={styles.mainText}>Profile</Text>
      </View>
    </View>
  );
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
    bottom: 0,
    padding: 12,
  },
  mainText: {
    paddingTop: 8,
    fontSize: 12,
    color: "white",
    fontFamily: "Lato_400Regular",
  },
  imgSize: {
    width: 24,
    height: 24,
  },
  viewTab: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 51,
    height: 50,
  },
  addView: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    top: 0,
  },
});
