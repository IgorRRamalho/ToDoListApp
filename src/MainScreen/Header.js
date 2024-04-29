import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={stylesHeader.headerContainer}>
      <View style={stylesHeader.viewImg}>
        <Image
          source={require("../../assets/Home Screen/menu-button.png")}
          style={stylesHeader.headerImg}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={stylesHeader.headerText}>Index</Text>
      </View>

      <View style={stylesHeader.viewImg}>
        <Image
          source={require("../../assets/Home Screen/profile-img.png")}
          style={stylesHeader.headerImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontFamily: "Lato_400Regular",
  },
  headerImg: {
    width: 42,
    height: 42,
  },
  viewImg: {
    paddingRight: 10,
  },
});
