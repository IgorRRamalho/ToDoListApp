import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Platform,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function NewCategory({ closeModal, addNewCategory }) {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access media library is required!");
        }
      }
    })();
  }, []);

  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageSource({ uri: result.uri });
    }
  };

  const handleSaveCategory = () => {
    addNewCategory(newCategoryName, selectedColor);
    closeModal();
  };

  const renderColorItem = (color, iconName) => {
    const isSelected = selectedColor === color;
    return (
      <TouchableOpacity
        key={color}
        style={[
          styles.colorItem,
          {
            backgroundColor: color,
            borderColor: isSelected ? "#FFF" : "transparent",
          },
        ]}
        onPress={() => setSelectedColor(isSelected ? null : color)}
      >
        {isSelected && <AntDesign name="check" size={24} color="#FFFFFF" />}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={closeModal}
    >
      <View style={stylesView.base}>
        <View style={stylesView.viewModal}>
          <View style={stylesView.topContainer}>
            <Text style={styles.title}>Create new category</Text>
          </View>
          <View style={stylesView.viewMain}>
            <Text style={styles.text}>Category name:</Text>
            <TextInput
              placeholder="Category name"
              placeholderTextColor={"#979797"}
              onChangeText={setNewCategoryName}
              style={styles.input}
              value={newCategoryName}
            />
          </View>
          <Text style={styles.text}>Category icon:</Text>
          <TouchableOpacity onPress={escolherImagem}>
            <Image
              source={require("../../assets/Frame 159.png")}
              style={styles.chooseIcon}
            />
          </TouchableOpacity>

          {imageSource && <Image source={imageSource} />}

          <Text style={styles.text}>Category color:</Text>
          <View style={styles.colorScrollView}>
            {renderColorItem("#C9CC41")}
            {renderColorItem("#66CC41")}
            {renderColorItem("#41CCA7")}
            {renderColorItem("#4181CC")}
            {renderColorItem("#41A2CC")}
            {renderColorItem("#CC8441")}
            {renderColorItem("#9741CC")}
            {renderColorItem("#CC4173")}
          </View>

          <View style={stylesView.viewFotter}>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require("../../assets/CancelCategoryButton.png")}
                style={styles.buttonCancel}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSaveCategory}>
              <Image
                source={require("../../assets/CreateCategoryButton.png")}
                style={styles.buttonCreate}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const stylesView = StyleSheet.create({
  base: {
    backgroundColor: "#121212",
    flex: 1,
  },
  viewModal: {
    backgroundColor: "#121212",
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 80,
  },
  topContainer: {
    marginVertical: 20,
  },
  viewMain: {},
  viewFotter: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFFDE",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    lineHeight: 20,
  },
  text: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFFDE",
    paddingVertical: 12,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#979797",
    borderWidth: 0.8,
    borderRadius: 4,
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#1D1D1D",
    color: "#AFAFAF",
    fontSize: 16,
    lineHeight: 24.08,
  },
  buttonTextCancel: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.08,
    color: "#8687E7",
  },
  buttonCancel: {
    width: 160,
    height: 48,
    borderRadius: 4,
    marginHorizontal: 18,
  },
  buttonCreate: {
    width: 160,
    height: 48,
    borderRadius: 4,
  },

  colorScrollView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  colorItem: {
    width: 36,
    height: 36,
    backgroundColor: "gray",
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  chooseIcon: {
    width: 154,
    height: 37,
  },
  chooseText: {
    color: "#FFFFFF36",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 21,
  },
});
