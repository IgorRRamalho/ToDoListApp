import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const { height } = Dimensions.get("window");

export default function ScreenAddTask({ closeModal }) {
  return (
    <View style={styles.containerAddTask}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalBackground} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.headerText}>Add Task</Text>
          </View>
         
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.InputStyle}
              placeholder=" Do math homework"
              placeholderTextColor={"white"}
            ></TextInput>

            <Text style={styles.textStyle}> Description</Text>
          </View>
        
        </TouchableOpacity>
      </Modal>
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
  headerText: {
    fontFamily: "Lato_700Bold",
    color: "white",
    fontSize: 20,
  },
  mainContainer: {
    paddingTop: 20,
  },
  textStyle: {
    color: "#AFAFAF",
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
    borderWidth: 1, // largura da borda
    padding: 10, // preenchimento interno
    borderRadius: 8,
  },
});
