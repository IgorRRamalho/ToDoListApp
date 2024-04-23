import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryScreen from "./CategoryScrenn";
import TaskPriorityScreen from "./TaskPriorityScreen";

export default function ScreenAddTask({ closeModal }) {
  const [TaskPriority, setTaskPriority] = useState(false);
  const [TaskCategory, setTaskCategory] = useState(false);
  const textInputRef = useRef(null);

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
                  // value={textInputRef}
                  // onChangeText={setTitle}
                ></TextInput>

                <TextInput
                  style={styles.textStyle}
                  placeholder=" Description"
                  // value={description}
                  // onChangeText={setDescription}
                  placeholderTextColor={"#AFAFAF"}
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
                    <CategoryScreen closeModal={() => setTaskCategory(false)} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePressTaskPriority}>
                  <Image
                    source={require("../../assets/Home Screen/flag03.png")}
                    style={[styles.fotterImg]}
                  />
                  {TaskPriority && (
                    <TaskPriorityScreen
                      closeModal={() => setTaskPriority(false)}
                    />
                  )}
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require("../../assets/Home Screen/send04.png")}
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
