import { Stack } from "expo-router";

// Root layout controls the app's main Stack
export default function RootLayout() {
  return (
    <Stack>
      {/* Load the Tabs navigator inside the Root Stack */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
 