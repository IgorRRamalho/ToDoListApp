import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
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
  Image,
  Button,

} from "react-native";
import Quadrados from "../components/TaskPriorityScreen/Quadrados";

const { height } = Dimensions.get("window");

export default function TaskPriorityScreen({ closeModal }) {

  const [highLight, sethighLight] = useState(false);

  const handlePress = () => {
    sethighLight(true);
  };

  return (

    <Modal animationType="slide" transparent={true} onRequestClose={closeModal}>
      <View style={styles.modalBackground}>
        <View style={styles.viewModal}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> Task Priority</Text>
          </View>
         
          <Quadrados/>
            
            
          <View style={styles.fotterView}>
            
            <TouchableOpacity style={styles.viewButton} onPress={closeModal}>
            <Image
                source={require("../../assets/Cancel Button.png")}
                style={styles.buttonStyle}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewButton} onPress={closeModal}>
            <Image
                source={require("../../assets/Delete Button.png")}
                style={styles.buttonStyle}
              />
            </TouchableOpacity>
         
         </View>
        </View>
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

    backgroundColor: "#363636",
    marginVertical: 228,
    marginBottom: 228,
    marginHorizontal: 24,
 
    borderRadius: 10,
    padding: 15,
  
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
    flexDirection: 'row', // Para colocar as views lado a lado
    justifyContent: 'space-between', // Para distribuir as views horizontalmente
    alignItems: 'center', // Para alinhar as views verticalmente
    textAlign: 'center',
  
  },
  viewButton: {
    width: 170,
    height: 50,
    marginHorizontal: -7,
    marginVertical: -7,
  },
  buttonStyle: {
    borderRadius: 4,
    width: '100%',
    height: '100%',
  

  },
});
