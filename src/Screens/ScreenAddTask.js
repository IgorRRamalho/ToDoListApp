import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HeaderAddTask from "../components/AddTask/HeaderAddTask";
import MainAddTask from "../components/AddTask/MainAddTask";

export default function ScreenAddTask() {


  return (
    <View style={styles.containerAddTask}>
     <HeaderAddTask/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAddTask: {
    flex: 0.5, // Definindo para ocupar metade da tela
    height: 'height / 2',
    backgroundColor: "#979797",
    top: '60%',
  },
 
});
