import { SQLite, openDatabase } from 'expo-sqlite';

// Open database
const db = openDatabase('tasksDB');


export function initDatabase() {
  // Criação da tabela de tarefas
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, priority INTEGER, category TEXT, date TEXT)',
      [],
      () => { 
        // Callback vazia, pode adicionar alguma lógica aqui se necessário
      },
      error => {
        console.error('Erro ao criar a tabela de tarefas', error);
      }
    );
  });

  // Inserção das categorias
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE)"
    );
    // tx.executeSql("DELETE FROM categories"); // Se necessário, remova o comentário para limpar a tabela antes de inserir novas categorias
    tx.executeSql("BEGIN TRANSACTION;");
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Grocery"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Work"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Sport"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Design"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["University"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Social"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Music"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Health"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Movie"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Home"]);
    tx.executeSql("INSERT OR IGNORE INTO categories (name) VALUES (?)", ["Create New"]);
    tx.executeSql("COMMIT;");
  });
}


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
