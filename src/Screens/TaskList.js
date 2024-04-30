import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { openDatabase } from "expo-sqlite";
import { Ionicons } from "@expo/vector-icons";

const db = openDatabase("tasksDB");

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tasks WHERE title LIKE ?",
        [`%${searchQuery}%`],
        (_, { rows }) => {
          setTasks(rows._array);
        },
        (error) => {
          console.error("Erro ao buscar as tarefas", error);
        }
      );
    });
  };

  const handleToggle = (id) => {
    if (selectedTask === id) {
      setSelectedTask(null);
    } else {
      setSelectedTask(id);
    }
  };

  const handleMoveToCompleted = () => {
    if (selectedTask) {
      db.transaction((tx) => {
        tx.executeSql(
          "UPDATE tasks SET completed = 1 WHERE id = ?",
          [selectedTask],
          () => {
            console.log("Tarefa movida para concluídos:", selectedTask);
            setSelectedTask(null);
            fetchTasks();
          },
          (error) => {
            console.error("Erro ao mover a tarefa para concluídos:", error);
          }
        );
      });
    }
  };

  const handleDeleteTask = (taskId) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM tasks WHERE id = ?",
        [taskId],
        () => {
          console.log("Tarefa excluída:", taskId);
          fetchTasks();
        },
        (error) => {
          console.error("Erro ao excluir a tarefa:", error);
        }
      );
    });
  };

  const renderItem = ({ item }) => (
    <View style={TaskStyles.taskContainer}>
      <TouchableOpacity
        style={TaskStyles.checkbox}
        onPress={() => handleToggle(item.id)}
      >
        {selectedTask === item.id ? (
          <Ionicons name="checkmark-circle" size={20} color="green" />
        ) : (
          <Ionicons name="radio-button-off" size={20} color="white" />
        )}
      </TouchableOpacity>
      <View style={TaskStyles.viewInfo}>
        <Text style={TaskStyles.taskTitle}>{item.title}</Text>

        <View style={TaskStyles.content}>
          <Text style={TaskStyles.taskDescription}>Today At 16:45</Text>
          <View style={TaskStyles.contentTags}>
            <Text style={TaskStyles.taskCategory}> {item.category}</Text>

            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <View style={TaskStyles.taskPriority}>
                <Image
                  style={TaskStyles.flag}
                  source={require("../../assets/Home Screen/flag.png")}
                />
                <Text style={TaskStyles.priorityText}> {item.priority}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.iconSearch}
          source={require("../../assets/search-normal.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for your task..."
          placeholderTextColor={"#AFAFAF"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={fetchTasks}
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
        )}
      />
      <TouchableOpacity onPress={handleMoveToCompleted}>
        <Text style={styles.completeButton}>Marcar como Concluído</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  iconSearch: {
    width: 24,
    height: 24,
    margin: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    height: 48,
    padding: 12,
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    backgroundColor: "#1D1D1D",
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: "#979797",
  },
  searchInput: {
    paddingLeft: 5,
    flex: 1,
    color: "white",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#FFFFFF",
  },
  completeButton: {
    textAlign: "center",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18,
  },
});

const TaskStyles = StyleSheet.create({
  taskTitle: {
    fontFamily: "Lato_400Regular",
    fontSize: 21,
    fontWeight: 400,
    marginBottom: 8,
    color: "white",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
    height: 29,
  },
  taskDescription: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 29,
    fontSize: 16,
    color: "#AFAFAF",
  },
  taskContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#363636",
    borderRadius: 4,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    color: "red",
    marginTop: 5,
  },
  checkbox: {
    marginVertical: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  viewInfo: {
    marginLeft: 10,
    marginRight: 150,
  },
  taskPriority: {
    width: 42,
    height: 29,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#8687E7",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  priorityText: {
    color: "#E8E8E8",
    lineHeight: 21,
    fontFamily: "Lato_400Regular",
    fontSize: 12,
  },
  flag: {
    width: 14,
    height: 14,
    gap: 0,
    marginRight: 3,
  },
  taskCategory: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#8687E7",
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 29,
    fontSize: 16,
    color: "#E8E8E8",
    marginRight: 10,
  },
  contentTags: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskList;
