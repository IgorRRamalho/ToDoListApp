import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/MainScreen/Header";
import Main from "./src/components/MainScreen/Main";
import Footer from "./src/components/MainScreen/Fotter";
import { Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenAddTask from "./src/components/AddTask/ScreenAddTask";

const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return (
    <MainScreen/>
  );



  function MainScreen(){
    return(
      <View style={styles.container}>
      {/* <StatusBar barStyle="default"/> */}
      <Header />
      <Main />
      <Footer />
    </View>
    )
  }


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#121212",
  },
});
