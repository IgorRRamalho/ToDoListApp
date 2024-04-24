import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function MainTask({ tasks }) {
  const [searchText, setSearchText] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.iconSearch}
          source={require("../../assets/search-normal.png")}
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search by title..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      {filteredTasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Title: {task.title}</Text>
          <View style={styles.content}>
            <Text style={styles.taskDescription}>
              Description: {task.description}
            </Text>
            <View style={styles.contentTags}>
              <Text style={styles.taskCategory}>Category: {task.category}</Text>
              <View style={styles.taskPriority}>
                <Image
                  style={styles.flag}
                  source={require("../../assets/flag.png")}
                />
                <Text style={styles.priorityText}>{task.priority}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#121212",
    flexDirection: "column",
    justifyContent: "center",
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
  },
  iconSearch: {
    marginLeft: 5,
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
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentTags: {
    flexDirection: "row",
    alignItems: "center",
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
  taskCategory: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  taskPriority: {
    width: 42,
    height: 29,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#8687E7",
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 8,
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
  },
});
