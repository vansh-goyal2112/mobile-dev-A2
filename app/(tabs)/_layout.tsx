import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useAppContext } from "../../src/context/AppContext";

export default function TabLayout() {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#006dbb",
        tabBarInactiveTintColor: isDark ? "#d1d5db" : "#777",
        tabBarStyle: {
          height: 78,
          paddingBottom: 12,
          paddingTop: 8,
          backgroundColor: isDark ? "#1f2937" : "white",
          borderTopColor: isDark ? "#374151" : "#ddd",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="moveMoney"
        options={{
          title: "Move Money",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}