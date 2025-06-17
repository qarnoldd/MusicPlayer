import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { getDatabase, initDatabase } from "../utils/database";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    AileronLight: require("../../assets/fonts/aileron/Aileron-Light.otf"),
  });
  useEffect(() => {
    async function initDB() {
      try {
        console.log("INITIALISING DB");
        const db = await getDatabase();
        await initDatabase(db);
        console.log("DONE");
      } catch (error) {
        console.error("Error in initDB:", error);
      }
    }
    initDB();
    if (loaded) {
      SplashScreen.hideAsync();
      console.log("LOADED");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
