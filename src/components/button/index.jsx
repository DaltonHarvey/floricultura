import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Button =({ children, styleElement }) => {

  return (
    <TouchableOpacity style= { styleElement } >
      { children } 
    </TouchableOpacity>
  )
}

export default Button;