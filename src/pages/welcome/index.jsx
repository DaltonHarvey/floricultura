import React from 'react';
import { View, Text, Image } from 'react-native';
import _style from "./style";
import _imageLogo from '../../assets/images/icon.png';
import { RenderImages, Steps } from './components';

import Button from "../../components/button";

export default function WelCome() {
  return (
    <View style={ _style.container }>
      <View style={ _style.header }>
        <Text style={ _style.textHeaderLeft }>Your Home.</Text>
        <Text style={ _style.textHeaderRight }>Greener.</Text>
      </View> 
      <Text style={ _style.subTitle }>Enjoy the experience.</Text>

      <View style={ _style.container }>
        <RenderImages/>
        <Steps/>
      </View>

      <View style={ _style.bottom } >
        <Button >
            <Text>
              Login
            </Text>
        </Button>
        <Button styleElement = { _style.buttonSize } shadow onPress={ () => console.log('teste')}>
            <Text>
              Signup
            </Text>
          </Button>
          <Button  onPress={ () => console.log('teste')}>
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
      </View>
    </View>
  )
}