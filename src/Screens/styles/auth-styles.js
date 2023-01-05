import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBG: {
      flex: 1,
      resizeMode: "cover",
    },
    wrapper: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
  
    imageThumb: {
      top: -60,
      position: "absolute",
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    addButton: {
      position: "absolute",
      top: 21,
      width: 25,
      height: 25,
    },
    title: {
      marginTop: 92,
      marginBottom: 33,
      textAlign: "center",
      fontSize: 30,
      lineHeight: 35,
      color: "#212121",
    },
    input: {
      marginBottom: 16,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 15,
      backgroundColor: "#F6F6F6",
      height: 50,
      borderWidth: 1,
      borderRadius: 8,
      color: "#212121",
    },
    showPassword: {
      position: "absolute",
      right: 0,
      bottom: 205,
      paddingRight: 16,
    },
    textShowPassword: {
      fontSize: 16,
      lineHeight: 19,
      color: "#1B4371",
    },
  
    button: {
      height: 51,
      marginTop: 27,
      paddingVertical: 16,
      backgroundColor: "#FF6C00",
      borderRadius: 100,
    },
    textButton: {
      fontSize: 16,
      lineHeight: 19,
      textAlign: "center",
      color: "#FFFFFF",
    },
    link: {
      marginTop: 16,
      marginBottom: 60,
      textAlign: "center",
      color: "#1B4371",
    },
  });

  
  export default styles;