import { SQLite, openDatabase } from 'expo-sqlite';

// Open database
const db = openDatabase('tasksDB');




export const initDatabase = () => {
  // Create table if not exists
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, priority INTEGER, category TEXT, date TEXT)',
      [],
      () => { },
      error => {
        console.error('Erro ao criar a tabela de tarefas', error);
      }
    );
  });
};

export const addTask = (title, description, priority, category, date) => {
  // Insert task
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tasks (title, description, priority, category, date) VALUES (?, ?, ?, ?, ?)',
      [title, description, priority, category, date],
      () => { },
      error => {
        console.error('Erro ao adicionar a tarefa', error);
      }
    );
  });
};

export const getTasks = callback => {
  // Retrieve tasks
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tasks',
      [],
      (_, { rows }) => {
        callback(rows._array);
      },
      error => {
        console.error('Erro ao obter as tarefas', error);
      }
    );
  });
};

export const deleteTask = id => {
  // Delete task by id
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM tasks WHERE id = ?',
      [id],
      () => { },
      error => {
        console.error('Erro ao excluir a tarefa', error);
      }
    );
  });
};
