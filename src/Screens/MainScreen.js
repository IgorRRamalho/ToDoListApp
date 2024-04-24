import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/MainScreen/Header";
import Main from "../components/MainScreen/Main";
import Fotter from "../components/MainScreen/Fotter";
import TaskList from "./TaskList";
import { initDatabase } from "../DB/dbManager";
import { SQLite, openDatabase } from 'expo-sqlite'; // Import SQLite from expo-sqlite

initDatabase(); 

const db = openDatabase('tasksDB'); // Open the database

export default function MainScreen() {
  const [hasTasks, setHasTasks] = useState(false); 

  useEffect(() => {
    checkTasksExistence();
  }, []);

  const checkTasksExistence = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT COUNT(*) AS count FROM tasks',
        [],
        (_, { rows }) => {
          const count = rows._array[0].count; // Adjusted to rows._array
          setHasTasks(count > 0);
        },
        error => {
          console.error('Erro ao verificar a existência de tarefas', error);
        }
      );
    });
  };

  return (
    <View style={styles.containerMain}>
      <Header />
      {hasTasks ? <TaskList /> : <Main />}
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
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#121212",
  },
});

