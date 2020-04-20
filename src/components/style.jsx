import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    alignContent: 'center',
    alignItems: 'center'
  },

  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})