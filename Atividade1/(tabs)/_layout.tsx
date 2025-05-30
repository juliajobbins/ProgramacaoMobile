import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "profissional") {
            iconName = "briefcase-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#87cefa",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#0d0d1a",
          borderTopColor: "#000080",
          paddingBottom: 6,
          paddingTop: 6,
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#0d0d1a",
        },
        headerTintColor: "#87cefa",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    />
  );
}
