import React, { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

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
        <View>
          <Text style={styles.title}>Create new category</Text>
          <Text style={styles.text}>Category name:</Text>
          <TextInput
            placeholder="Category name"
            onChangeText={setNewCategoryName}
            style={styles.input}
            value={newCategoryName} // Controlled component
          />

          <Text style={styles.text}>Category icon:</Text>
          <TouchableOpacity style={styles.chooseIcon}>
            <Text>Choose icon from library</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Category color:</Text>
          <View>
            <Text style={styles.text}>Category color:</Text>
            <ScrollView horizontal={true} style={styles.colorScrollView}>
              <View style={styles.colorItem}>
                <Text style={styles.colorText}>Color 1</Text>
              </View>
              <View style={styles.colorItem}>
                <Text style={styles.colorText}>Color 2</Text>
              </View>
              <View style={styles.colorItem}>
                <Text style={styles.colorText}>Color 3</Text>
              </View>
              <View style={styles.colorItem}>
                <Text style={styles.colorText}>Color 4</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.buttonClose}>
            <Text style={styles.buttonTextCancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCreate}
            onPress={handleSaveCategory}
          >
            <Text style={styles.buttonText}>Create Category</Text>
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
    flexDirection: "column",
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
  buttonTextCancel: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.08,
    color: "#8687E7",
  },
  title: {
    color: "#FFFFFFDE",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 700,
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFFDE",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonClose: {
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
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.08,
    color: "#FFFFFF",
  },

  colorScrollView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  colorItem: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  colorText: {
    color: "white",
    fontSize: 16,
  },
  
});
