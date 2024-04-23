import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CategorySquares = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const images = [
    require("../../assets/Categories-img/Group267.png"),
    require("../../assets/Categories-img/Group268.png"),
    require("../../assets/Categories-img/Group269.png"),
    require("../../assets/Categories-img/Group270.png"),
    require("../../assets/Categories-img/Group271.png"),
    require("../../assets/Categories-img/Group272.png"),
    require("../../assets/Categories-img/Group273.png"),
    require("../../assets/Categories-img/Group274.png"),
    require("../../assets/Categories-img/Group275.png"),
    require("../../assets/Categories-img/Group276.png"),
    require("../../assets/Categories-img/Group277.png"),
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

  /* IF DE APERTAR NO CREATE NEW(CRIAR NOVA CATEGORIA) */
  const handlePress = (index) => {
    if (index === 10) {
      // If "Create New" is pressed
      setModalVisible(true);
    } else {
      setSelectedCategory(index);
    }
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity onPress={() => handlePress(index)} key={index}>
          <View style={[styles.quadrado]}>
            <View style={styles.contentView}>
              <Image
                source={image}
                style={[
                  styles.imgSize,
                  index === selectedCategory && styles.selected,
                ]}
              />
              <Text style={styles.text}>{description[index]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              {/* MODAL DE NOVA CATEGORIA */}
              <Text>Create New Category</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  selected: {
    borderColor: "#8687E7", // Change border color when selected
  },
  imgSize: {
    width: 64,
    height: 64,
    borderWidth: 5, // Add border
    borderRadius: 2,
    borderColor: "transparent", // Initially transparent
  },
  text: {
    fontFamily: "Lato_400Regular",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    margin: 3,
    marginVertical: 5,
    width: 64,
  },
  contentView: {
    flex: 1,
    justifyContent: "flex-start",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default CategorySquares;
