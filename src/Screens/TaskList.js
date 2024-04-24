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
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones de acordo com sua preferência

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
      setSelectedTask(null); // Desmarca se já estiver marcado
    } else {
      setSelectedTask(id); // Marca a tarefa selecionada
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
            setSelectedTask(null); // Limpa a tarefa selecionada
            fetchTasks(); // Atualiza a lista de tarefas
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
          fetchTasks(); // Atualiza a lista de tarefas após a exclusão
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
        <Text style={TaskStyles.taskDescription}>
          {/* Description: {item.description} */}
          Today At 16:45 || {item.priority} || 
          {item.category}
        </Text>

        <View>
          <Image source={require("../../assets/Home Screen/flag.png")}/>
          <Text> {item.priority}</Text>
        </View>
      </View>
      
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={TaskStyles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
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
  taskDescription: {
    fontSize: 16,
    marginBottom: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInfo: {
    marginLeft: 10,
    marginRight: 150,
  },
});

export default TaskList;
