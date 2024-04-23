import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/MainScreen/Header";
import Main from "../components/MainScreen/Main";
import Fotter from "../components/MainScreen/Fotter";
import { useEffect, useState } from "react";
import { loadTasks } from "./ScreenAddTask";
import MainTask from "./MainTask";

export default function MainScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks(setTasks, tasks);
  }, []);
  
  return (
    <View style={styles.containerMain}>
      {/* <StatusBar barStyle="default"/> */}
      <Header />
      
       {tasks.length === 0 ? <Main /> : <MainTask tasks={tasks} />} 

      <Fotter />
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
});
