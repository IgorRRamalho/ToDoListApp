import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderAddTask from "../components/AddTask/HeaderAddTask";
import MainAddTask from "../components/AddTask/MainAddTask";

const { height } = Dimensions.get("window");

export default function ScreenAddTask({ closeModal }) {
  return (
    <View style={styles.containerAddTask}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.select({
          ios: () => 0,
          android: () => -height * 0.6, // Offset to position above the keyboard
        })()}
        style={styles.keyboardAvoidingContainer}
      >
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
          statusBarTranslucent={true}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={closeModal}
          >
            <View style={styles.modalContainer}>
              <HeaderAddTask />
              <MainAddTask />
            </View>
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAddTask: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
});


<KeyboardAvoidingView
  behavior="height"
  resetScrollToCoords={{ x: 0, y: 0 }}
  keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
  scrollEnabled={false}
  extraHeight={100} 
