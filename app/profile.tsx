import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../src/context/AppContext";

export default function ProfileScreen() {
  const router = useRouter();
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <SafeAreaView
      style={[styles.screen, isDark && styles.darkScreen]}
      edges={["top"]}
    >
      <ScrollView style={isDark && styles.darkScreen}>
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={36}
            color="white"
            onPress={() => router.back()}
          />

          <Text style={styles.headerTitle}>Profile</Text>

          <Ionicons name="help-circle-outline" size={34} color="white" />
        </View>

        <View style={[styles.profileCard, isDark && styles.darkCard]}>
          <View style={[styles.avatar, isDark && styles.darkAvatar]}>
            <Ionicons name="person" size={58} color="#0066b3" />
          </View>

          <Text style={[styles.name, isDark && styles.darkText]}>
            Vansh Goyal
          </Text>
          <Text style={[styles.subtitle, isDark && styles.darkSubText]}>
            RBC Mobile Client
          </Text>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Personal Information
          </Text>
        </View>

        <View style={[styles.row, isDark && styles.darkCard]}>
          <Text style={[styles.label, isDark && styles.darkSubText]}>Email</Text>
          <Text style={[styles.value, isDark && styles.darkText]}>
            goyalvansh742@gmail.com
          </Text>
        </View>

        <View style={[styles.row, isDark && styles.darkCard]}>
          <Text style={[styles.label, isDark && styles.darkSubText]}>Phone</Text>
          <Text style={[styles.value, isDark && styles.darkText]}>
            +1 *** *** 7420
          </Text>
        </View>

        <View style={[styles.row, isDark && styles.darkCard]}>
          <Text style={[styles.label, isDark && styles.darkSubText]}>Address</Text>
          <Text style={[styles.value, isDark && styles.darkText]}>
            Calgary, Alberta
          </Text>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Security
          </Text>
        </View>

        <View style={[styles.menuRow, isDark && styles.darkCard]}>
          <Ionicons name="lock-closed-outline" size={30} color="#0066b3" />
          <Text style={[styles.menuText, isDark && styles.darkText]}>
            Change Password
          </Text>
          <Ionicons
            name="chevron-forward"
            size={26}
            color={isDark ? "#d1d5db" : "#999"}
          />
        </View>

        <View style={[styles.menuRow, isDark && styles.darkCard]}>
          <Ionicons name="shield-checkmark-outline" size={30} color="#0066b3" />
          <Text style={[styles.menuText, isDark && styles.darkText]}>
            Two-Step Verification
          </Text>
          <Ionicons
            name="chevron-forward"
            size={26}
            color={isDark ? "#d1d5db" : "#999"}
          />
        </View>

        <View style={[styles.menuRow, isDark && styles.darkCard]}>
          <Ionicons name="notifications-outline" size={30} color="#0066b3" />
          <Text style={[styles.menuText, isDark && styles.darkText]}>
            Notification Settings
          </Text>
          <Ionicons
            name="chevron-forward"
            size={26}
            color={isDark ? "#d1d5db" : "#999"}
          />
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
    height: 105,
    backgroundColor: "#006dbb",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },

  profileCard: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#eef3f6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  name: {
    fontSize: 28,
    color: "#333",
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 17,
    color: "#666",
    marginTop: 6,
  },

  sectionHeader: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "300",
    color: "#555",
  },

  row: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },

  value: {
    fontSize: 19,
    color: "#333",
  },

  menuRow: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
    gap: 16,
  },

  menuText: {
    flex: 1,
    fontSize: 20,
    color: "#444",
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
  },

  darkAvatar: {
    backgroundColor: "#374151",
  },

  darkText: {
    color: "white",
  },

  darkSubText: {
    color: "#d1d5db",
  },
});