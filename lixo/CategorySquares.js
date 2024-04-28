import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import NewCategory from "../src/Screens/NewCategory";


const CategorySquares = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false); // Estado para controlar a exibição do modal NewCategoryScreen

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

  const handleAddNewCategory = () => {
    setIsAddingNewCategory(true);
  };

  const handlePressCategory = (index) => {
    if (index === categories.length - 1) {
      // Se "Create New" for pressionado
      handleAddNewCategory(); // Chame a função para abrir o modal NewCategoryScreen
    } else {
      onSelectCategory(categories[index]);
      setSelectedCategory(index);
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity onPress={() => handlePressCategory(index)} key={index}>
          <View
            style={[
              styles.quadrado,
              index === selectedCategory && styles.selected,
            ]}
          >
            <View style={styles.contentView}>
              <Image
                source={images[index]}
                style={[
                  styles.imgSize,
                  index === selectedCategory && styles.selectedImg,
                ]}
              />
              <Text style={styles.text}>{category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Renderize o modal NewCategoryScreen se isAddingNewCategory for verdadeiro */}
       {isAddingNewCategory && (     
          <NewCategory
            closeModal={() => setIsAddingNewCategory(false)} addCategory={addNewCategory}
          />
          
      )} 
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
});

export default CategorySquares;
