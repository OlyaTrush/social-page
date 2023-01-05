import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    camera: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
    },
  
    takeButton: {
      marginBottom: 32,
      width: 150,
      height: 45,
      padding: 12,
      borderRadius: 100,
      backgroundColor: "#FF6C00",
    },
    button: {
      width: 100,
      height: 45,
      padding: 12,
      borderRadius: 100,
      backgroundColor: "#FF6C00",
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 83,
      backgroundColor: "000",
    },
  
    textButton: {
      fontSize: 16,
      lineHeight: 19,
      textAlign: "center",
      color: "#FFFFFF",
    },
  
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    preview: {
      alignSelf: "stretch",
      flex: 1,
    },
  });

  
  export default styles;