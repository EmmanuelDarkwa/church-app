import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./components/WelcomeScreen";
import Churchform from "./components/Churchform";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Form" component={Churchform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default auth;
