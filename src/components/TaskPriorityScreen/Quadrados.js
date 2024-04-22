import { Lato_400Regular } from "@expo-google-fonts/lato";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const Quadrados = () => {
  const corOriginal = "#272727"; // Cor original dos quadrados
  const [colors, setColors] = useState(
    Array.from({ length: 10 }, () => corOriginal)
  );

  const handlePress = (index) => {
    const novaCor = [...colors];

    if (colors[index] === corOriginal) {
      novaCor[index] = "#8687E7";
    } else {
      novaCor[index] = corOriginal;
    }
    // Atualiza o estado das cores
    setColors(novaCor);
  };

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity onPress={() => handlePress(index)} key={index}>
          <View style={[styles.quadrado, { backgroundColor: color }]}>
            <View style={styles.contentView}>
              <Image
                source={require("../../../assets/flag.png")}
                style={styles.imgSize}
              />
              <Text style={styles.text}>{index}</Text>
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
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  quadrado: {
    justifyContent: "center",
    margin: 12,
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  imgSize: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: "Lato_400Regular",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    margin: 3,
  },
  contentView: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    width: 24,
    height: 50,
  },
});

export default Quadrados;
