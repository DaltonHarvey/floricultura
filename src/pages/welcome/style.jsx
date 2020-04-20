import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Theme } from '../../constrants';


export default StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    alignContent: 'center',
    alignItems: 'center'
  },

  header: {
    flexDirection:'row'
  },

  textHeaderLeft: {
    fontSize: 26,
    fontWeight:"bold"
  },
  textHeaderRight: {
    fontSize: 26,
    fontWeight:"bold",
    color: Theme.COLORS.primary
  },
  subTitle: {
    fontSize: 18,
    paddingTop: 1,
    color: Theme.COLORS.gray2
  },

  content: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },

  img: {
    justifyContent: "center",
    alignItems: "center"
  },

  buttonSize: {
    width: 275,
    backgroundColor: 'red'
  },

  // button: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   marginBottom: 36
  // },
  bottom: {
    flex: 0.3,
    justifyContent: 'flex-end',
    marginBottom: 36
  },

})