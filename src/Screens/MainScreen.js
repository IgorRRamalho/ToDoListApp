import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Header from "../MainScreen/Header";
import Main from "../MainScreen/Main";
import Fotter from "../MainScreen/Fotter";
import TaskList from "./TaskList";
import { initDatabase } from "../DB/dbManager";
import { SQLite, openDatabase } from "expo-sqlite";

initDatabase();

export const verificaTask = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT COUNT(*) AS count FROM tasks",
      [],
      (_, { rows }) => {
        const count = rows._array[0].count;
        setHasTasks(count > 0);
      },
      (error) => {
        console.error("Erro ao verificar a existência de tarefas", error);
      }
    );
  });
};

const db = openDatabase("tasksDB");

export default function MainScreen() {
  const [hasTasks, setHasTasks] = useState(false);

  useEffect(() => {
    verificaTask();
  }, []);

  const verificaTask = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT COUNT(*) AS count FROM tasks",
        [],
        (_, { rows }) => {
          const count = rows._array[0].count;
          setHasTasks(count > 0);
        },
        (error) => {
          console.error("Erro ao verificar a existência de tarefas", error);
        }
      );
    });
  };

  const atualizaTela = () => {
    verificaTask();
  };

  return (
    <View style={styles.containerMain}>
      <View style={stylesHeader.headerContainer}>
        <View style={stylesHeader.viewImg}>
          <Image
            source={require("../../assets/Home Screen/menu-button.png")}
            style={stylesHeader.headerImg}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={stylesHeader.headerText}>Index</Text>
        </View>

        <View style={stylesHeader.viewImg}>
          <TouchableOpacity onPress={atualizaTela}>
            <Image
              source={require("../../assets/Home Screen/profile-img.png")}
              style={stylesHeader.headerImg}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  touch: {
    margin: 0,
    padding: 0,
  },
  refreshButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

const stylesHeader = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontFamily: "Lato_400Regular",
  },
  headerImg: {
    width: 42,
    height: 42,
  },
  viewImg: {
    paddingRight: 10,
  },
});
