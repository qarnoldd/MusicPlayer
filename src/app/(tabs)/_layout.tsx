import Headphones from "@/assets/images/svgreact/headphones";
import Menu from "@/assets/images/svgreact/menu";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#191919",
          borderTopWidth: 0,
          boxShadow: "-2px 25px 30px 17px rgba(0,0,0,0.75)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          headerShown: false,
          tabBarIcon: ({ color }) => <Menu stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          title: "Player",
          headerShown: false,
          tabBarIcon: ({ color }) => <Headphones stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="playlist/[id]"
        options={{ href: null, headerShown: false }}
      />
    </Tabs>
  );
}
