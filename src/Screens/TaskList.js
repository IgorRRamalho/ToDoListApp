import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { openDatabase } from 'expo-sqlite';


const db = openDatabase('tasksDB');

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tasks WHERE title LIKE ?',
        [`%${searchQuery}%`],
        (_, { rows }) => {
          setTasks(rows._array);
        },
        error => {
          console.error('Erro ao buscar as tarefas', error);
        }
      );
    });
  };

  const handleDeleteTask = id => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?',
        [id],
        fetchTasks,
        error => {
          console.error('Erro ao excluir a tarefa', error);
        }
      );
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>Title: {item.title}</Text>
      <Text style={styles.taskDescription}>Description: {item.description}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={fetchTasks}
        />
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    height: 48,
    padding: 12,
    backgroundColor: "#1D1D1D",
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: "#979797",
  },
  searchInput: {
    paddingLeft: 5,
    flex: 1,
    color: "#FFFFFF",
  },
  taskContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#363636",
    borderRadius: 4,
    elevation: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  taskTitle: {
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
    marginBottom: 5,
    color: "#AFAFAF",
  },
  taskDescription: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: "#FFFFFF",
  },
});

export default TaskList;
