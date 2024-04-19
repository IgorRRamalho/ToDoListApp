import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import MainScreen from "./src/Screens/MainScreen";
import ScreenAddTask from "./src/Screens/ScreenAddTask";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return <ScreenNavigation />;

  function ScreenNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {<Stack.Screen name="MainScreen" component={MainScreen} />}
          <Stack.Screen name="AddTaskScreen" component={ScreenAddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


