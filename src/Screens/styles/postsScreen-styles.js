import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  
    userSection: {
      marginVertical: 32,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    avatarImage: {
      width: 60,
      height: 60,
      borderRadius: 16,
      resizeMode: "cover",
    },
    userInfo: {
      marginLeft: 8,
    },
    textUserName: {
      color: "#212121",
      fontSize: 13,
      lineHeight: 15,
    },
    textUserEmail: {
      color: "#212121",
      opacity: 0.8,
      fontSize: 11,
      lineHeight: 13,
    },
    cardSection: {
      alignItems: "center",
      width: "100%",
      marginTop: 32,
    },
    cardContainer: {},
    cardImage: {
      resizeMode: "cover",
      borderRadius: 8,
    },
    cardTitle: {
      marginTop: 8,
      fontSize: 16,
      lineHeight: 19,
      color: "#212121",
    },
    cardThumb: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
      marginBottom: 35,
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    cardText: {
      marginLeft: 4,
      fontSize: 16,
      lineHeight: 19,
      color: "#212121",
    },
  });

  export default styles;