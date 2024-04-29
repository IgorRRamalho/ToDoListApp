import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import { Text } from "react-native";
import MainScreen from "./src/Screens/MainScreen";
import { initDatabase } from "./src/DB/dbManager";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("categories.db");
export default function App() {

  /* db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE)"
    );
    tx.executeSql("DELETE FROM categories"); // Se necessário, remova o comentário para limpar a tabela antes de inserir novas categorias
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
  }); */

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
    
  }
  return <MainScreen />;
}
