// CategoryScreen.js
import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import NewCategory from "./NewCategory";

export default function CategoryScreen({ closeModal }) {
  const [highlight, setHighlight] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [categories, setCategories] = useState([
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
  ]);

  const handlePress = (categoryName) => {
    setSelectedCategory(categoryName);
    setHighlight(true);
  };

  const handleCloseModal = () => {
    closeModal(selectedCategory);
  };

  const handleAddNewCategory = () => {
    setIsAddingNewCategory(true);
  };

  const addNewCategory = (newCategoryName) => {
    setCategories([...categories, newCategoryName]);
  };

  // Estado para controlar a exibição do modal NewCategoryScreen

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

  const handlePressCategory = (categoryName) => {
    if (categoryName === "Create New") {
      // Se "Create New" for pressionado
      handleAddNewCategory(); // Chame a função para abrir o modal NewCategoryScreen
    } else {
      setSelectedCategory(categoryName);
      setHighlight(true);
    }
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.viewModal}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.headerText}>Choose Category</Text>
            </TouchableOpacity>
          </View>

          <View style={SquareStyle.container}>
            {categories.map((category, index) => (
              <TouchableOpacity
                onPress={() => handlePressCategory(category)}
                key={index}
              >
                <View
                  style={[
                    SquareStyle.quadrado,
                    category === selectedCategory && SquareStyle.selected,
                  ]}
                >
                  <View style={SquareStyle.contentView}>
                    <Image
                      source={images[index]}
                      style={[
                        SquareStyle.imgSize,
                        category === selectedCategory &&
                          SquareStyle.selectedImg,
                      ]}
                    />
                    <Text style={SquareStyle.text}>{category}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {isAddingNewCategory && (
              <NewCategory
                closeModal={() => setIsAddingNewCategory(false)}
                addNewCategory={addNewCategory} // Passando a função para adicionar nova categoria
              />
            )}
          </View>

          <View style={styles.footerView}>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={handleCloseModal}
            >
              <Image
                source={require("../../assets/Home Screen/Add Category Button.png")}
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
    marginVertical: 175,
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
  footerView: {
    height: 48,
  },
  viewButton: {
    flex: 1,
    marginHorizontal: -7,
    marginVertical: -7,
  },
  buttonStyle: {
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
});

const SquareStyle = StyleSheet.create({
  container: {
    marginTop: 5,
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
});
