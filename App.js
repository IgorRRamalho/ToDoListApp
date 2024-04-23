import {
    Lato_400Regular,
    Lato_700Bold,
    useFonts
} from "@expo-google-fonts/lato";

import { Text } from "react-native";
import MainScreen from "./src/Screens/MainScreen";


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return <MainScreen />;
}
