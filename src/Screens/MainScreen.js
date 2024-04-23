import Header from "../MainScreen/Header";
import Fotter from "../MainScreen/Fotter";
import Main from "../MainScreen/Main";
import { StyleSheet, View } from "react-native";

export default function MainScreen() {
  return (
    <View style={styles.containerMain}>
      {/* <StatusBar barStyle="default"/> */}
      < Header/>
      <Main />
      <Fotter />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#121212",
  },
});
