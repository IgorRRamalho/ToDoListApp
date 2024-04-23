import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    // Carregar tarefas salvas ao iniciar o componente
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = () => {
    const newTask = { title, description, category, priority };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('');
    saveTasks();
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>Title: {item.title}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Priority: {item.priority}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
        style={{ marginBottom: 10 }}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default TodoList;
