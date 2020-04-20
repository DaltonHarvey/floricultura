import React from 'react';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import WelCome from "./pages/welcome";
import Login from './pages/login';
import Explore from './pages/explore';
import Browse from './pages/browse';
import Product from './pages/product';
import Settings from './pages/settings';
 

const AppStack = createStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions= { { headerShown: false, headerStyle: {}, headerBackImage: <Image /> , headerBackTitle: null, headerLeftContainerStyle: { }, headerRightContainerStyle: { }  } }  >
        <AppStack.Screen name="welcome"  component={ WelCome } />
        <AppStack.Screen name="login"    component={ Login } />
        <AppStack.Screen name="explore"  component={ Explore } />
        <AppStack.Screen name="browse"   component={ Browse } />
        <AppStack.Screen name="product"  component={ Product } />
        <AppStack.Screen name="settings" component={ Settings } />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}