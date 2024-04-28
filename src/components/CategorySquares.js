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

const CategorySquares = ({ onSelectCategory }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handlePress = (index) => {
    if (index === 10) {
      // If "Create New" is pressed
      setModalVisible(true);
    } else {
      onSelectCategory(description[index]); // Pass the category name to onSelectCategory
      setSelectedCategory(index); // Set the index of selected category
    }
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity onPress={() => handlePress(index)} key={index}>
          <View
            style={[
              styles.quadrado,
              index === selectedCategory && styles.selected,
            ]}
          >
            <View style={styles.contentView}>
              <Image
                source={image}
                style={[
                  styles.imgSize,
                  index === selectedCategory && styles.selectedImg,
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
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={createCategory.viewModal}>
        <View style={createCategory.viewModal}> 
          <Text>Create new Category</Text>

        </View>
          
        </View>
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
    borderWidth: 2,
    borderColor: "transparent", // Initially transparent
  },
  selected: {
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  imgSize: {
    width: 64,
    height: 64,
    borderRadius: 2,
  },
  selectedImg: {
    borderWidth: 1, // Add border
    borderColor: "white", // Add highlight color
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

const createCategory = StyleSheet.create({
  viewModal: {
    backgroundColor: "#121212",

  },
});

export default CategorySquares;
