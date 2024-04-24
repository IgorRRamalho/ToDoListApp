import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SQLite, openDatabase } from 'expo-sqlite'; // Updated import

// Open database
const db = openDatabase('tasksDB'); // Database initialization

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
          setTasks(rows._array); // Access rows using rows._array
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
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar tarefa..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={fetchTasks}
      />
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
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  taskContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TaskList;
