import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../context/AppContext";
import type { Account } from "../types";

type Props = {
  account: Account;
  onPress?: () => void;
};

export function AccountCard({ account, onPress }: Props) {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.row, isDark && styles.darkRow]}>
        <View>
          <Text style={[styles.title, isDark && styles.darkText]}>
            {account.title}
          </Text>

          <Text style={[styles.subtitle, isDark && styles.darkSubtitle]}>
            {account.subtitle}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.amount, isDark && styles.darkText]}>
            {account.amount}
          </Text>

          <Ionicons
            name="chevron-forward"
            size={26}
            color={isDark ? "#d1d5db" : "#999"}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#e2e7ea",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    color: "#444",
    fontWeight: "300",
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    color: "#555",
    marginTop: 4,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  amount: {
    fontSize: 18,
    color: "#444",
  },

  darkRow: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
  },

  darkText: {
    color: "white",
  },

  darkSubtitle: {
    color: "#d1d5db",
  },
});