
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: keyof typeof Ionicons.glyphMap;

        if (route.name === "index") {
          iconName = "home";
        } else if (route.name === "profissional") {
          iconName = "briefcase";
        }

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          tabBarActiveTintColor: "#87cefa",
          tabBarInactiveTintColor: "#888",
          tabBarStyle: {
            backgroundColor: "#0d0d1a",
            borderTopColor: "#000080",
            paddingBottom: 6,
            paddingTop: 6,
            height: 60,
          },
          headerShown: false,
        };
      }}
    />
  );
}
