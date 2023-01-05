import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
  
    section: {
      flex: 1,
      alignItems: "center",
      marginTop: 32,
      paddingHorizontal: 16,
    },
    image: {
      height: 240,
  
      resizeMode: "cover",
      borderRadius: 8,
    },
    contentBlock: {
      alignItems: "center",
      justifyContent: "center",
      height: 240,
      backgroundColor: "#F6F6F6",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#E8E8E8",
    },
    text: {
      marginTop: 8,
      marginBottom: 16,
      color: "#BDBDBD",
      fontSize: 16,
      lineHeight: 19,
    },
    input: {
      marginTop: 16,
      paddingTop: 0,
      paddingBottom: 0,
      height: 56,
      borderBottomWidth: 1,
      borderStyle: "solid",
      borderColor: "#E8E8E8",
      fontSize: 16,
      lineHeight: 19,
      color: "#212121",
    },
    locationIcon: {
      position: "absolute",
      bottom: 16,
    },
    publishButton: {
      height: 51,
      marginTop: 27,
      paddingVertical: 16,
      borderRadius: 100,
    },
    textPublishButton: {
      fontSize: 16,
      lineHeight: 19,
      textAlign: "center",
      color: "#BDBDBD",
    },
    trashButton: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80,
      width: 70,
      height: 40,
      borderRadius: 20,
    },
  });

  
  export default styles;