import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* TELA AINDA NÃO INICIADA */

export default function NewCategoryScreen({ closeModal }) {
  const [highLight, sethighLight] = useState(false);

  const handlePress = () => {
    sethighLight(true);
  };

  return (
    <Modal animationType="slide" transparent={false} onRequestClose={closeModal}>
        <View style={styles.viewModal}>
          
    
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    margin: 0,
    padding: 0,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  viewModal: {
    backgroundColor: "#121212",
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    color: "white",
    paddingBottom: 16,
  },
  headerView: {
    textAlign: "center",
    alignItems: "center",
    borderColor: "#979797",
    // width: 312,
    borderBottomWidth: 1,
  },
  mainView: {
    flex: 1,
    marginTop: 24,
  },
  fotterView: {
    height: 48,
  },
  viewButton: {
    flex: 1,
    marginHorizontal: -7,
    marginVertical: -7,
  },
  buttonStyle: {
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
});
