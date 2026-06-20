import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuRow } from "../../src/components/MenuRow";
import { useAppContext } from "../../src/context/AppContext";
import { moreItems } from "../../src/data/menuItems";

export default function MoreScreen() {
  const router = useRouter();
  const { theme, toggleTheme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <SafeAreaView style={[styles.screen, isDark && styles.darkScreen]} edges={["top"]} >
      <ScrollView style={isDark && styles.darkScreen}>
        <View style={styles.header}>
          <Ionicons name="help-circle-outline" size={38} color="white" />
        </View>

        <View style={[styles.titleContainer, isDark && styles.darkCard]}>
          <Text style={[styles.title, isDark && styles.darkText]}>More</Text>
        </View>

        <View style={[styles.topSection, isDark && styles.darkCard]}>
          <Pressable
            style={styles.topItem}
            onPress={() => router.push("/profile")}
          >
            <Ionicons style={{borderWidth: 1, borderColor: "#0066b3", borderRadius: 100, padding: 6}} name="person-outline" size={35} color="#0066b3" />
            <Text style={[styles.topText, isDark && styles.darkText]}>
              Profile
            </Text>
          </Pressable>

          <View style={styles.topItem}>
            <Ionicons style={{borderWidth: 1, borderColor: "#0066b3", borderRadius: 100, padding: 6}} name="help-circle-outline" size={35} color="#0066b3" />
            <Text style={[styles.topText, isDark && styles.darkText]}>
              Help
            </Text>
          </View>

          <View style={styles.topItem}>
            <Ionicons style={{borderWidth: 1, borderColor: "#0066b3", borderRadius: 100, padding: 6}} name="settings-outline" size={35} color="#0066b3" />
            <Text style={[styles.topText, isDark && styles.darkText]}>
              Settings
            </Text>
          </View>
        </View>

        <View style={[styles.themeRow, isDark && styles.darkCard]}>
          <Ionicons
            name={isDark ? "sunny-outline" : "moon-outline"}
            size={38}
            color="#0066b3"
          />

          <Text style={[styles.signOutText, isDark && styles.darkText]}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </Text>

          <Text onPress={toggleTheme} style={styles.themeButton}>
            Switch
          </Text>
        </View>

        <View style={[styles.signOut, isDark && styles.darkCard, {justifyContent: "center"}]}>
          <Ionicons name="log-out-outline" size={38} color="#0066b3" />
          <Text style={[styles.signOutText, isDark && styles.darkText, {color: "#0066b3"}]}>
            Sign Out
          </Text>
        </View>

        {moreItems.map((section) => (
          <View key={section.section}>
            <View style={[styles.sectionHeader, isDark && styles.darkSection]}>
              <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
                {section.section}
              </Text>
            </View>

            {section.items.map((item) => (
              <MenuRow
                key={item.id}
                title={item.title}
                icon={item.icon}
                isNew={item.isNew}
              />
            ))}
          </View>
        ))}

        <View style={[styles.footer, isDark && styles.darkSection]}>
          <Text style={styles.footerLink}>About RBC Mobile</Text>
          <Text style={styles.footerLink}>Give Feedback</Text>
          <Text style={styles.footerLink}>Legal</Text>
          <Text style={styles.footerLink}>Privacy & Security</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#006dbb",
  },

  header: {
    height: 50,
    backgroundColor: "#006dbb",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 24,
  },

  titleContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 35,
  },

  title: {
    fontSize: 26,
    fontWeight: "300",
    color: "#666060",
  },

  topSection: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  topItem: {
    alignItems: "center",
    gap: 8,
  },

  topText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "300",
  },

  themeRow: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 18,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  signOut: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 18,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  signOutText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },

  sectionHeader: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#555",
  },

  footer: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 28,
  },

  footerLink: {
    fontSize: 18,
    color: "#0070c9",
  },

  themeButton: {
    color: "#0070c9",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: "auto",
  },

  darkScreen: {
    backgroundColor: "#006dbb",
  },

  darkCard: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
  },

  darkSection: {
    backgroundColor: "#111827",
    borderColor: "#374151",
  },

  darkText: {
    color: "white",
  },
});