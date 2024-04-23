import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function MainTask({ tasks }) {
  const [searchText, setSearchText] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {filteredTasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Title: {task.title}</Text>
          <Text style={styles.taskDescription}>
            Description: {task.description}
          </Text>
          <Text style={styles.taskCategory}>Category: {task.category}</Text>
          <Text style={styles.taskPriority}>Priority: {task.priority}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#f0f0f0",
  },
  searchInput: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  taskContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  taskCategory: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  taskPriority: {
    fontSize: 16,
    color: "#666",
  },
});
