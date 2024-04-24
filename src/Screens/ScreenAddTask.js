import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { addTask } from "../DB/dbManager";
import TaskPriorityScreen from "./TaskPriorityScreen";
import CategoryScreen from "./CategoryScrenn";
import { deleteTask } from "../DB/dbManager";

import { SQLite } from "expo-sqlite"; // Import SQLite from expo-sqlite

export default function ScreenAddTask({ closeModal }) {
  const [TaskPriority, setTaskPriority] = useState(false);
  const [TaskCategory, setTaskCategory] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePressTaskPriority = () => {
    setTaskPriority(true);
  };

  const handlePressTaskCategory = () => {
    setTaskCategory(true);
  };

  const handleAddTask = () => {
    if (title.trim() === "") {
      alert("Please enter a title for the task.");
      return;
    }
  
    if (selectedPriority === null) {
      alert("Please select a priority for the task.");
      return;
    }

    if (selectedCategory === null) {
      alert("Please select a category for the task.");
      return;
    }
  
    addTask(title, description, selectedPriority, selectedCategory, date);
    closeModal();
  };
  const textInputRef = useRef(null);

  useEffect(() => {
    // Focus on the TextInput as soon as the modal is opened
    const timer = setTimeout(() => {
      textInputRef.current.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
        visible={true} // Ensure modal is visible
      >
        <View style={styles.viewModal}>
          <TouchableOpacity style={styles.modalBackground} activeOpacity={1}>
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.headerText}>Add Task</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
              <TextInput
                ref={textInputRef}
                style={styles.InputStyle}
                placeholder=" Do math homework"
                placeholderTextColor={"white"}
                value={title}
                onChangeText={setTitle}
              ></TextInput>

              <TextInput
                style={styles.textStyle}
                placeholder=" Description"
                placeholderTextColor={"#AFAFAF"}
                value={description}
                onChangeText={setDescription}
              ></TextInput>
            </View>

            <View style={[styles.viewButtons, { marginLeft: -24 }]}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/Home Screen/timer01.png")}
                  style={styles.fotterImg}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePressTaskCategory}>
                <Image
                  source={require("../../assets/Home Screen/tag02.png")}
                  style={styles.fotterImg}
                />
                {TaskCategory && (
                  <CategoryScreen
                  closeModal={(category) => {
                    setSelectedCategory(category);
                    setTaskCategory(false); // Fechar o modal após a seleção da categoria
                  }}
                />
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePressTaskPriority}>
                <Image
                  source={require("../../assets/Home Screen/flag03.png")}
                  style={[styles.fotterImg]}
                />
                
                {TaskPriority && (<TaskPriorityScreen
                  closeModal={(priority) => {
                    setSelectedPriority(priority);
                    setTaskPriority(false);
                  }}
                />)}
              </TouchableOpacity>

              <TouchableOpacity onPress={handleAddTask}>
                <Image
                  source={require("../../assets/Home Screen/send04.png")}
                  style={[styles.fotterImg, { marginLeft: 160 }]}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1, // Adjusted to occupy the whole screen
    flexDirection: "column",
    backgroundColor: "#363636",
    marginTop: 350,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
  modalContainer: {
    width: 81,
  },
  headerText: {
    fontFamily: "Lato_700Bold",
    color: "white",
    fontSize: 20,
    width: 81,
  },
  mainContainer: {
    paddingTop: 20,
  },
  textStyle: {
    color: "white",
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    paddingTop: 16,
  },
  InputStyle: {
    height: 43,
    width: "100%",
    fontFamily: "Lato_400Regular",
    color: "white",
    fontSize: 18,
    borderColor: "white",
    borderWidth: 1, // width of the border
    padding: 10, // internal padding
    borderRadius: 8,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewButtons: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 40,
  },
  fotterImg: {
    height: 24,
    width: 24,
    marginHorizontal: 24,
  },
  viewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
