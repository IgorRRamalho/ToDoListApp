import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function NewCategory({ closeModal, addNewCategory }) {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null); // Adicionando o estado para a cor selecionada

  const handleSaveCategory = () => {
    addNewCategory(newCategoryName, selectedColor); // Chame a função para adicionar nova categoria e a cor selecionada
    closeModal();
  };

  const renderColorItem = (color, iconName) => {
    const isSelected = selectedColor === color;
    return (
      <TouchableOpacity
        key={color}
        style={[
          styles.colorItem,
          {
            backgroundColor: color,
            borderColor: isSelected ? "#FFF" : "transparent",
          },
        ]}
        onPress={() => setSelectedColor(isSelected ? null : color)}
      >
        {isSelected && (
          <Ionicons name="checkmark-circle" size={40} color="#FFF" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={closeModal}
    >
      <View style={styles.viewModal}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Create new category</Text>
          <Text style={styles.text}>Category name:</Text>
          <TextInput
            placeholder="Enter category name"
            onChangeText={setNewCategoryName}
            style={styles.input}
            value={newCategoryName} // Controlled component
          />

          <Text style={styles.text}>Category icon:</Text>
          <TouchableOpacity style={styles.chooseIcon}>
            <Text style={styles.chooseText}>Choose icon from library</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Category color:</Text>
          <View style={styles.colorScrollView}>
            {renderColorItem("#C9CC41")}
            {renderColorItem("#66CC41")}
            {renderColorItem("#41CCA7")}
            {renderColorItem("#4181CC")}
            {renderColorItem("#41A2CC")}
            {renderColorItem("#CC8441")}
            {renderColorItem("#9741CC")}
            {renderColorItem("#CC4173")}
          </View>
        </View>

        <View style={styles.bottonContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.buttonCancel}>
            <Text style={styles.buttonTextCancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={handleSaveCategory}
          >
            <Text style={styles.buttonTextCreate}>Create Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewModal: {
    backgroundColor: "#121212",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 327,
    height: 48,
    borderColor: "#979797",
    borderWidth: 0.8,
    borderRadius: 4,
    marginBottom: 20,
    padding:12,
    backgroundColor:"#1D1D1D",
    color:"#AFAFAF",
    fontSize:16,
    lineHeight:24.08
  },
  buttonTextCancel: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.08,
    color: "#8687E7",
  },
  buttonCancel: {
    width: 153,
    height: 48,
    borderRadius: 4,
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  buttonCreate: {
    width: 153,
    height: 48,
    borderRadius: 4,
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#8687E7",
  },
  buttonTextCreate: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.08,
    color: "#FFFFFF",
  },
  title: {
    color: "#FFFFFFDE",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 700,
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  colorScrollView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  colorItem: {
    width: 36,
    height: 36,
    backgroundColor: "gray",
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  bottonContainer: {
    flexDirection: "row",
    marginTop:70,
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFFDE",
  },
  chooseIcon:{
    width:154,
    height:37,
    borderRadius:6,
    paddingHorizontal: 16,
    paddingVertical:8
  },
  chooseText:{
    color:"#FFFFFF36",
    fontWeight:400,
    fontSize:12,
    lineHeight:21
  }
});