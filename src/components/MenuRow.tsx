import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../context/AppContext";

type Props = {
  title: string;
  icon: any;
  isNew?: boolean;
};

export function MenuRow({ title, icon, isNew }: Props) {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <View style={[styles.row, isDark && styles.darkRow]}>
      <Ionicons
        name={icon}
        size={22}
        color="#0066b3"
        style={{borderWidth: 1, borderColor: "#0066b3", borderRadius: 100, padding: 6}}
      />

      <Text
        style={[
          styles.rowText,
          isDark && styles.darkText,
        ]}
      >
        {title}
      </Text>

      {isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newText}>
            New
          </Text>
        </View>
      )}

      <Ionicons
        name="chevron-forward"
        size={26}
        color={isDark ? "#d1d5db" : "#999"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
    gap: 18,
  },

  rowText: {
    flex: 1,
    fontSize: 18,
    color: "#444",
    fontWeight: "300",
  },

  newBadge: {
    backgroundColor: "#ffdf00",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 5,
  },

  newText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },

  darkRow: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
  },

  darkText: {
    color: "white",
  },
});