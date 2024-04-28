// NewCategory.js
import React, { useState } from "react";
import { Modal, View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function NewCategory({ closeModal, addCategory }) {
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleSaveCategory = () => {
    addCategory(newCategoryName); // Passando o nome da nova categoria para a função de callback
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={closeModal}
    >
      <View style={styles.viewModal}>
         <TextInput
          placeholder="Enter category name"
          onChangeText={setNewCategoryName}
          style={styles.input}
          value={newCategoryName} // Controlled component
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSaveCategory}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={closeModal}> 
          <Text style={styles.buttonText}> VOLTAR</Text>
        </TouchableOpacity>
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
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});
