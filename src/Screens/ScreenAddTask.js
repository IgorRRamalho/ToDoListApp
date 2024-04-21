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
        behavior="height"
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      >
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles.modalBackground} onPress={closeModal}>
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
    flex: 1, // Definindo para ocupar metade da tela
  },
  modalBackground: {
    flex: 1, // Definindo para ocupar metade da tela
    flexDirection: "column",
    backgroundColor: "#363636",
    top: "60%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },
  modalContainer: {},
});
