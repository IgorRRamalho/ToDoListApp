import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
  Image,
} from "react-native";
import TaskPriorityScreen from "./TaskPriorityScreen";
import CategoryScreen from "./CategoryScrenn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

export const loadTasks = async (setTasks) => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    if (storedTasks !== null) {
      setTasks(JSON.parse(storedTasks));
    }
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

export default function ScreenAddTask({ closeModal, tasks, setTasks }) {
  const [TaskPriority, setTaskPriority] = useState(false);
  const [TaskCategory, setTaskCategory] = useState(false);
  const [selectedPriorityIndex, setSelectedPriorityIndex] = useState(null);
  const textInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    // Carregar tarefas salvas ao iniciar o componente
    loadTasks(setTasks);
  }, []);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  const addTask = () => {
    const newTask = {
      title,
      description,
      category,
      priority: selectedPriorityIndex,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("");
    saveTasks();
  };

  const handleTaskPriorityClose = (index) => {
    setSelectedPriorityIndex(index);
    setTaskPriority(false);
  };

  const handlePressTaskPriority = () => {
    setTaskPriority(true);
  };

  const handlePressTaskCategory = () => {
    setTaskCategory(true);
  };

  useEffect(() => {
    // Foca no TextInput assim que o modal for aberto
    const timer = setTimeout(() => {
      textInputRef.current.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>Title: {item.title}</Text>
      <Text style={styles.taskDescription}>
        Description: {item.description}
      </Text>
      <Text style={styles.taskCategory}>Category: {item.category}</Text>
      <Text style={styles.taskPriority}>Priority: {item.priority}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.containerAddTask}>
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
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
                  value={description}
                  onChangeText={setDescription}
                  placeholderTextColor={"#AFAFAF"}
                ></TextInput>
              </View>

              <View style={[styles.viewButtons, { marginLeft: -24 }]}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/timer01.png")}
                    style={styles.fotterImg}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePressTaskCategory}>
                  <Image
                    source={require("../../assets/tag02.png")}
                    style={styles.fotterImg}
                  />
                  {TaskCategory && (
                    <CategoryScreen closeModal={() => setTaskCategory(false)} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePressTaskPriority}>
                  <Image
                    source={require("../../assets/flag03.png")}
                    style={[styles.fotterImg]}
                  />
                  {TaskPriority && (
                    <TaskPriorityScreen closeModal={handleTaskPriorityClose} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={addTask}>
                  <Image
                    source={require("../../assets/send04.png")}
                    style={[styles.fotterImg, { marginLeft: 160 }]}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerAddTask: {
    flex: 1,
    backgroundColor: "black",
  },
  modalBackground: {
    flex: 1,
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
    borderWidth: 1,
    padding: 10,
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
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
