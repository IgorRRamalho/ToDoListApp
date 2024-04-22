import { Lato_400Regular } from "@expo-google-fonts/lato";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const CategorySquares = () => {
  const bordaOriginal = 0; // Cor original dos quadrados
  const [Border, setBorder] = useState(
    Array.from({ length: 10 }, () => bordaOriginal)
  );

  const handlePress = (index) => {
    const novaCor = [...Border];
    novaCor[index] = novaCor[index] === 0 ? 1 : 0;
    setBorder(novaCor);
  };

  const images = [
    require("../../../assets/Categories-img/Group 267.png"),
    require("../../../assets/Categories-img/Group 268.png"),
    require("../../../assets/Categories-img/Group 269.png"),
    require("../../../assets/Categories-img/Group 270.png"),
    require("../../../assets/Categories-img/Group 271.png"),
    require("../../../assets/Categories-img/Group 272.png"),
    require("../../../assets/Categories-img/Group 273.png"),
    require("../../../assets/Categories-img/Group 274.png"),
    require("../../../assets/Categories-img/Group 275.png"),
    require("../../../assets/Categories-img/Group 276.png"),
    require("../../../assets/Categories-img/Group 277.png"),
  ];
  const description = [
    "Grocery",
    "Work",
    "Sport",
    "Design",
    "University",
    "Social",
    "Music",
    "Health",
    "Movie",
    "Home",
    "Create New",
  ];

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity onPress={() => handlePress(index)} key={index}>
          <View style={[styles.quadrado, {}]}>
            <View style={styles.contentView}>
              <Image source={image} style={styles.imgSize} />

              <Text style={styles.text}>{description[index]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  quadrado: {
    marginHorizontal: 25,
    marginVertical: 25,
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  imgSize: {
    width: 64,
    height: 64,
  },
  text: {
    fontFamily: "Lato_400Regular",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    margin: 3,
    marginVertical: 5,
    width: 75,
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CategorySquares;
