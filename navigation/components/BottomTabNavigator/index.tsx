import React, { memo, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, TabType } from "../../types";
import { Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TABS } from "../../config/tabs";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

Dimensions.get("screen").height;
Dimensions.get("screen").width;

const BottomTabNavigator = ({
  route,
}: {
  route?: { params?: { initialRouteName: keyof RootTabParamList } };
}) => {
  const insets = useSafeAreaInsets();

  return (
    <BottomTab.Navigator
      initialRouteName={"Home"}
      safeAreaInsets={insets}
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? "11%" : 60,
          backgroundColor: '#F8F9FB'
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: { marginBottom: 10, fontSize: 12 },
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "#40C785",
      
      }}
    >
      {TABS.map((tab) => (
        <BottomTab.Screen
          {...tab}
          key={tab.id}
          name={tab.name as keyof RootTabParamList}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
