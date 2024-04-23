import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenAddTask from "../Screens/ScreenAddTask";

const { height } = Dimensions.get("window");

export default function ButonnAdd() {
  const [addTaskVisible, setAddTaskVisible] = useState(false);

  const handlePress = () => {
    setAddTaskVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.circle}>
          <Image
            source={require("../../assets/Home Screen/button Add Task.png")}
            style={styles.imgSize}
          />
        </View>
      </TouchableOpacity>
      {addTaskVisible && (
        <ScreenAddTask closeModal={() => setAddTaskVisible(false)} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    top: height * -0.065,
    left: -20,
    justifycontent: "center",
    alignitems: "center",
    width: 64,
    height: 64,

    borderRadius: 100, // metade da largura/altura para fazer um círculo
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 10, // para sombra funcionar no Android
  },
  imgSize: {
    width: 100,
    height: 100,
  },
});
