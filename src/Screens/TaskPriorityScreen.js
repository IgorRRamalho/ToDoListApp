import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TaskPriorityScreen({ closeModal }) {
  const corOriginal = "#272727";
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [colors, setColors] = useState(
    Array.from({ length: 10 }, () => corOriginal)
  );

  const handlePressCor = (index) => {
    const novaCor = [...colors];

    if (selectedSquare !== null) {
      novaCor[selectedSquare] = corOriginal;
    }

    novaCor[index] = "#8687E7";
    setColors(novaCor);
    setSelectedSquare(index);
  };

  const handleSave = () => {
    closeModal(selectedSquare);
  };

  return (
    <Modal animationType="slide" transparent={true} onRequestClose={closeModal}>
      <View style={styles.modalBackground}>
        <View style={styles.viewModal}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> Task Priority</Text>
          </View>

          <View style={styles.container}>
            {colors.map((color, index) => (
              <TouchableOpacity
                onPress={() => handlePressCor(index)}
                key={index}
              >
                <View style={[styles.quadrado, { backgroundColor: color }]}>
                  <View style={styles.contentView}>
                    <Image
                      source={require("../../assets/Home Screen/flag.png")}
                      style={styles.imgSize}
                    />
                    <Text style={styles.text}>{index}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.fotterView}>
            <TouchableOpacity style={styles.viewButton} onPress={closeModal}>
              <Image
                source={require("../../assets/Home Screen/Cancel Button.png")}
                style={styles.buttonStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewButton} onPress={handleSave}>
              <Image
                source={require("../../assets/Home Screen/Delete Button.png")}
                style={styles.buttonStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    margin: 0,
    padding: 0,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  viewModal: {
    backgroundColor: "#363636",
    marginVertical: 228,
    marginBottom: 228,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 15,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    color: "white",
    paddingBottom: 16,
  },
  headerView: {
    textAlign: "center",
    alignItems: "center",
    borderColor: "#979797",
    borderBottomWidth: 1,
  },
  fotterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  viewButton: {
    width: 170,
    height: 50,
    marginHorizontal: -7,
    marginVertical: -7,
  },
  buttonStyle: {
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
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
