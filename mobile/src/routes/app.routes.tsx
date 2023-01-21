import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="New"
        component={New}
      />
      <Screen
        name="Habit"
        component={Habit}
      />
    </Navigator>
  )
}