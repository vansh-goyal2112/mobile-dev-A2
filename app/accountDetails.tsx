import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../src/context/AppContext";

export default function AccountDetailsScreen() {
  const router = useRouter();
  const { selectedAccount, theme } = useAppContext();

  const isDark = theme === "dark";

  const accountName = selectedAccount?.title ?? "Chequing";
  const accountNumber = selectedAccount?.subtitle ?? "01325-5150628";
  const amount = selectedAccount?.amount ?? "28.55";

  return (
    <SafeAreaView
      style={[styles.screen, isDark && styles.darkScreen]}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          isDark && styles.darkContainer,
        ]}
      >
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={36}
            color="white"
            onPress={() => router.back()}
          />

          <Text style={styles.headerTitle}>{accountName}</Text>

          <Ionicons
            name="help-circle-outline"
            size={34}
            color="white"
          />
        </View>

        <View
          style={[
            styles.balanceCard,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.accountName,
              isDark && styles.darkText,
            ]}
          >
            {accountName}
          </Text>

          <Text
            style={[
              styles.accountNumber,
              isDark && styles.darkSubText,
            ]}
          >
            {accountNumber}
          </Text>

          <Text
            style={[
              styles.balanceLabel,
              isDark && styles.darkSubText,
            ]}
          >
            Available Balance
          </Text>

          <Text
            style={[
              styles.balance,
              isDark && styles.darkText,
            ]}
          >
            ${amount}
          </Text>
        </View>

        <View style={styles.actions}>
          <View
            style={[
              styles.actionCard,
              isDark && styles.darkCard,
            ]}
          >
            <Ionicons
              name="swap-horizontal-outline"
              size={34}
              color="#0066b3"
            />
            <Text
              style={[
                styles.actionText,
                isDark && styles.darkText,
              ]}
            >
              Transfer
            </Text>
          </View>

          <View
            style={[
              styles.actionCard,
              isDark && styles.darkCard,
            ]}
          >
            <Ionicons
              name="paper-plane-outline"
              size={34}
              color="#0066b3"
            />
            <Text
              style={[
                styles.actionText,
                isDark && styles.darkText,
              ]}
            >
              Send
            </Text>
          </View>

          <View
            style={[
              styles.actionCard,
              isDark && styles.darkCard,
            ]}
          >
            <Ionicons
              name="document-text-outline"
              size={34}
              color="#0066b3"
            />
            <Text
              style={[
                styles.actionText,
                isDark && styles.darkText,
              ]}
            >
              Pay Bill
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text
            style={[
              styles.sectionTitle,
              isDark && styles.darkText,
            ]}
          >
            Recent Transactions
          </Text>
        </View>

        <View
          style={[
            styles.transaction,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.transactionTitle,
              isDark && styles.darkText,
            ]}
          >
            Tim Hortons
          </Text>

          <Text
            style={[
              styles.transactionAmount,
              isDark && styles.darkText,
            ]}
          >
            -8.50
          </Text>
        </View>

        <View
          style={[
            styles.transaction,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.transactionTitle,
              isDark && styles.darkText,
            ]}
          >
            Amazon.ca
          </Text>

          <Text
            style={[
              styles.transactionAmount,
              isDark && styles.darkText,
            ]}
          >
            -25.99
          </Text>
        </View>

        <View
          style={[
            styles.transaction,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.transactionTitle,
              isDark && styles.darkText,
            ]}
          >
            Spotify
          </Text>

          <Text
            style={[
              styles.transactionAmount,
              isDark && styles.darkText,
            ]}
          >
            -11.99
          </Text>
        </View>

        <View
          style={[
            styles.transaction,
            isDark && styles.darkCard,
          ]}
        >
          <Text
            style={[
              styles.transactionTitle,
              isDark && styles.darkText,
            ]}
          >
            Payroll Deposit
          </Text>

          <Text style={styles.deposit}>
            +850.00
          </Text>
        </View>

        <View style={{ height: 180 }} />
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

  container: {
    backgroundColor: "#eef3f6",
  },

  balanceCard: {
    backgroundColor: "white",
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },

  accountName: {
    fontSize: 28,
    color: "#444",
    fontWeight: "300",
  },

  accountNumber: {
    fontSize: 17,
    color: "#666",
    marginTop: 6,
  },

  balanceLabel: {
    fontSize: 16,
    color: "#666",
    marginTop: 28,
  },

  balance: {
    fontSize: 42,
    color: "#333",
    fontWeight: "300",
    marginTop: 6,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
  },

  actionCard: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dce3e8",
    padding: 14,
    height: 95,
    justifyContent: "space-between",
  },

  actionText: {
    fontSize: 17,
    color: "#222",
  },

  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "300",
    color: "#555",
  },

  transaction: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  transactionTitle: {
    fontSize: 19,
    color: "#444",
  },

  transactionAmount: {
    fontSize: 19,
    color: "#444",
  },

  deposit: {
    fontSize: 19,
    color: "#00703c",
  },

  darkScreen: {
    backgroundColor: "#006dbb",
  },
  
  darkContainer: {
    backgroundColor: "#111827",
  },

  darkCard: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
  },

  darkText: {
    color: "white",
  },

  darkSubText: {
    color: "#d1d5db",
  },
});