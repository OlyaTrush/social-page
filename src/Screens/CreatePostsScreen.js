import React, { useState, useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Image,
  Alert,
  Keyboard,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import styles from "./styles/createPosts-styles";

import DownloadPhoto from "../assets/images/downloadPhoto.svg";
import Location from "../assets/images/location.svg";
import Trash from "../assets/images/trash.svg";

export const CreatePostsScreen = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [image, setImage] = useState("");

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [isFocusedTitle, setIsFocusedTitle] = useState(false);
  const [isFocusedLocation, setIsFocusedLocation] = useState(false);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const [isDisabledPublish, setIsDisabledPublish] = useState(true);
  const [isDisabledTrash, setIsDisabledTrash] = useState(true);

  const titleHandler = (title) => setTitle(title);

  const onPublish = () => {
    if (!title.trim() || !location) {
      Alert.alert(`All fields must be completed!`);
      return;
    }
    Alert.alert(`Post successfully created!`);
    const newPost = {
      id: Date(),
      imagePost: image,
      title: title,
      location: `${location?.latitude}, ${location?.longitude}`,
      comments: 50,
      likes: 200,
    };
    setImage();
    setTitle("");
    setLocation("");
    Keyboard.dismiss();
    navigation.navigate("Posts", { newPost });
  };

  const onDelete = () => {
    setTitle("");
    setLocation("");
    setImage();
    Alert.alert(`Successfully deleted!`);
    Keyboard.dismiss();
  };
  useEffect(() => {
    if (route.params) {
      setImage(route.params.photo);
      setLocation(route.params.location);
    }
  }, [route.params]);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setWindowWidth(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => dimensionsHandler.remove();
  }, []);

  useEffect(() => {
    image && title && location
      ? setIsDisabledPublish(false)
      : setIsDisabledPublish(true);
  }, [title, location, image]);

  useEffect(() => {
    image || title || location
      ? setIsDisabledTrash(false)
      : setIsDisabledTrash(true);
  }, [title, location, image]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ ...styles.section, width: windowWidth }}>
            {image ? (
              <View>
                <Image
                  style={{ ...styles.image, width: windowWidth - 16 * 2 }}
                  source={{ uri: image }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 90,
                    left: (windowWidth - 60 - 16 * 2) / 2,
                  }}
                >
                  <DownloadPhoto
                    onPress={() => navigation.navigate("Camera")}
                    opacity={0.3}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{ ...styles.contentBlock, width: windowWidth - 16 * 2 }}
              >
                <TouchableOpacity>
                  <DownloadPhoto
                    onPress={() => navigation.navigate("Camera")}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <Text style={styles.text}>Download photo</Text>
            </View>
            <View style={{ width: windowWidth - 16 * 2 }}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocusedTitle ? "#FF6C00" : "#E8E8E8",
                  fontFamily: "Roboto",
                }}
                onFocus={() => setIsFocusedTitle(true)}
                onBlur={() => setIsFocusedTitle(false)}
                value={title}
                placeholder="Title..."
                cursorColor={"#BDBDBD"}
                placeholderTextColor={"#BDBDBD"}
                onChangeText={titleHandler}
              ></TextInput>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocusedLocation ? "#FF6C00" : "#E8E8E8",
                  paddingLeft: 26,
                  fontFamily: "Roboto",
                }}
                onFocus={() => setIsFocusedLocation(true)}
                onBlur={() => setIsFocusedLocation(false)}
                value={
                  location
                    ? `${location?.latitude}, ${location?.longitude}`
                    : ""
                }
                textContentType={"location"}
                placeholder="Location"
                cursorColor={"#BDBDBD"}
                placeholderTextColor={"#BDBDBD"}
              ></TextInput>
              <Location style={styles.locationIcon} />
            </View>
            <TouchableOpacity
              style={{
                ...styles.publishButton,
                width: windowWidth - 16 * 2,
                backgroundColor: isDisabledPublish ? "#F6F6F6" : "#FF6C00",
              }}
              onPress={onPublish}
              disabled={isDisabledPublish}
            >
              <Text
                style={{
                  ...styles.textPublishButton,
                  color: isDisabledPublish ? "#BDBDBD" : "#FFFFFF",
                  fontFamily: "Roboto",
                }}
              >
                Publish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.trashButton,
                backgroundColor: isDisabledTrash ? "#F6F6F6" : "#FF6C00",
              }}
              onPress={onDelete}
              disabled={isDisabledTrash}
            >
              <Trash stroke={isDisabledTrash ? "#BDBDBD" : "#FFFFFF"} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
