import * as React from "react";
import { useAtomValue } from "jotai";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./config/screens";
import { StatusBar } from "react-native";
import Login from "../screens/Login";
import { RootStackParamList, ScreenComponent } from "./types";
import BottomTabNavigator from "./components/BottomTabNavigator";

export const navigationRef = createNavigationContainerRef();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#000" barStyle="light-content" animated />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Root"}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator as ScreenComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
