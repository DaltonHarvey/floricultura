import React from 'react';
import { View, Text } from "react-native";
import _style from './style'

const RenderImages = () => {
  return (
    <View style={ _style.content } >
      <Text>Hello</Text>
    </View>
  )
}

const Steps = () => {
  return (
    <View style={ { paddingTop: 230 } }>
      <Text>* * *</Text>
    </View>
  )
}
export { RenderImages, Steps };