import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";

import DownloadPhoto from "../assets/images/downloadPhoto.svg";
import styles from "./styles/camera-styles";

export const CameraScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }

      const location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return Alert.alert(
      "Permission for camera not granted. Please change this in settings."
    );
  }

  const takePic = async () => {
    const newPhoto = await cameraRef.current.takePictureAsync();
    setPhoto(newPhoto.uri);
  };

  if (photo) {
    const sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    const savePic = () => {
      navigation.navigate("Create Post", { photo, location });
      setTimeout(() => {
        setPhoto(undefined);
        setLocation(null);
      }, 400);
    };

    return (
      <View style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo }} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ ...styles.button, marginRight: 8 }}
            onPress={sharePic}
          >
            <Text style={styles.textButton}>Share photo</Text>
          </TouchableOpacity>
          {hasMediaLibraryPermission ? (
            <TouchableOpacity
              style={{ ...styles.button, marginRight: 8 }}
              onPress={savePic}
            >
              <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
          ) : undefined}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPhoto(undefined)}
          >
            <Text style={styles.textButton}>Discard</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={styles.camera}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 32,
          }}
          onPress={takePic}
        >
          <DownloadPhoto />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};
