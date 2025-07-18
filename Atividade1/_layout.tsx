import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#000',
          paddingTop: 0,
        },
      }} />
    </SafeAreaProvider>
  );
}
