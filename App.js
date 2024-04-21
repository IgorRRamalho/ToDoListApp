import { Lato_100Thin_Italic, Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import MainScreen from "./src/Screens/MainScreen";
import ScreenAddTask from "./src/Screens/ScreenAddTask";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return <ScreenNavigation />;

  function ScreenNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "vertical", // Define a direção da animação
            ...TransitionPresets.ModalPresentationIOS, // Aplica a animação de modal
          }}
        >
          {
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
          }
          <Stack.Screen
            name="AddTaskScreen"
            component={ScreenAddTask}
            options={{ headerShown: false }}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
