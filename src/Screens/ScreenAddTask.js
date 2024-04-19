import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HeaderAddTask from "../components/AddTask/HeaderAddTask";
import MainAddTask from "../components/AddTask/MainAddTask";

export default function ScreenAddTask({ onClose }) {
  return (
    <View style={styles.overlay}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Fechar</Text>
      </TouchableOpacity>
      <View style={styles.addTaskContainer}>
        {/* Aqui você pode adicionar o conteúdo da tela de adicionar tarefa */}
        <Text>Tela de Adicionar Tarefa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#121212",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    //  backgroundColor: "red",
    paddingHorizontal: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  addTaskContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
