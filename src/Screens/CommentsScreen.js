import React, { useState, useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import Send from "../assets/images/send.svg";
import { TextInput } from "react-native-gesture-handler";

import styles from "./styles/comments.styles";

const POSTS = {
  id: 2,
  postImage: require("../assets/images/sunset.jpg"),
  title: "Sunset on the Black Sea",
  location: "Ukraine",
  comments: 3,
  commentsTexts: [
    {
      id: 100,
      date: "09 June, 2020",
      time: "08:40",
      userAvatar: require("../assets/images/avatarSmall.jpg"),
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    },
    {
      id: 101,
      userAvatar: require("../assets/images/avatar2Small.jpg"),
      date: "09 June, 2020",
      time: "09:14",
      text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    },
    {
      id: 102,
      date: "09 June, 2020",
      time: "09:20",
      userAvatar: require("../assets/images/avatarSmall.jpg"),
      text: "Thank you! That was very helpful!",
    },
  ],
  likes: 200,
};

export const CommentsScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );

  const [posts, setPosts] = useState(POSTS);

  const [comment, setComment] = useState("");

  const commentHandler = (comment) => setComment(comment);

  const onSend = () => {
    if (!comment.trim()) {
      Alert.alert(`Enter your comment, please`);
      return;
    }
    Alert.alert(`Your comment has been sent!`);
    console.log(comment);
    setComment("");
    Keyboard.dismiss();
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setWindowWidth(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => dimensionsHandler.remove();
  }, []);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayout}
      style={{ backgroundColor: "#FFFFFF", alignItems: "center" }}
    >
      <View style={{ width: windowWidth - 16 * 2 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{ ...styles.container, width: windowWidth - 16 * 2 }}>
              <Image
                style={styles.commentImage}
                source={require("../assets/images/sunset.jpg")}
              />
            </View>
          }
          ListFooterComponent={
            <View style={{ width: "100%", marginBottom: 32 }}>
              <TextInput
                value={comment}
                style={styles.input}
                placeholder="Leave a comment"
                cursorColor={"#BDBDBD"}
                placeholderTextColor={"#BDBDBD"}
                onChangeText={commentHandler}
              ></TextInput>
              <TouchableOpacity style={styles.sendButton} onPress={onSend}>
                <Send style={{ width: 34, height: 34 }} />
              </TouchableOpacity>
            </View>
          }
          contentContainerStyle={{ width: windowWidth - 16 * 2 }}
          data={posts.commentsTexts}
          renderItem={({ item }) => (
            <View
              style={{
                ...styles.commentWrapper,
                width: windowWidth - 16 * 2,
              }}
            >
              <Image
                source={item.userAvatar}
                style={styles.commentAvatarImage}
              />
              <View
                style={{
                  ...styles.textWrapper,
                  width: windowWidth - 28 - 16 * 3,
                }}
              >
                <Text style={styles.commentText}>{item.text}</Text>
                <Text style={styles.commentDate}>
                  {item.date} | {item.time}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
