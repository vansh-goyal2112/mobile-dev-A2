import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuRow } from "../../src/components/MenuRow";
import { useAppContext } from "../../src/context/AppContext";
import {
    moveMoneyCanadaItems,
    moveMoneyInternationalItems,
} from "../../src/data/menuItems";
 
export default function MoveMoneyScreen() {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
 
  return (
    <SafeAreaView
      style={[styles.screen, isDark && styles.darkScreen]}
      edges={["top"]}
    >
      <ScrollView
        style={isDark && styles.darkScreen}
      >
        <View style={styles.header}>
          <Ionicons
            name="help-circle-outline"
            size={34}
            color="white"
          />
        </View>
 
        <View
          style={[
            styles.titleRow,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.title,
              isDark && styles.darkText,
            ]}
          >
            Move Money
          </Text>
 
          <Text
            style={[
              styles.dots,
              isDark && styles.darkText,
            ]}
          >
            ⋮
          </Text>
        </View>
 
        <View
          style={[
            styles.sectionHeader,
            isDark && styles.darkSection,
          ]}
        >
          <Text
            style={[
              styles.sectionText,
              isDark && styles.darkText,
            ]}
          >
            Canada
          </Text>
        </View>
 
        {moveMoneyCanadaItems.map((item) => (
          <MenuRow
            key={item.id}
            title={item.title}
            icon={item.icon}
            isNew={item.isNew}
          />
        ))}
 
        <View
          style={[
            styles.sectionHeader,
            isDark && styles.darkSection,
          ]}
        >
          <Text
            style={[
              styles.sectionText,
              isDark && styles.darkText,
            ]}
          >
            International
          </Text>
        </View>
 
        {moveMoneyInternationalItems.map((item) => (
          <MenuRow
            key={item.id}
            title={item.title}
            icon={item.icon}
            isNew={item.isNew}
          />
        ))}
        <View
          style={{
            height: 100,
            backgroundColor: isDark ? "#1f2937" : "#eef3f6",
          }}
        />
       
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
 
  titleRow: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
 
  title: {
    fontSize: 27,
    fontWeight: "300",
    color: "#444",
  },
 
  dots: {
    fontSize: 32,
    color: "#444",
  },
 
  sectionHeader: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingTop: 23,
    paddingBottom: 9,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },
 
  sectionText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#555",
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