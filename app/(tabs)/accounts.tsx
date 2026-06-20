import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountCard } from "../../src/components/AccountCard";
import { useAppContext } from "../../src/context/AppContext";
import { bankingAccounts, creditAccounts } from "../../src/data/accounts";

export default function AccountsScreen() {
  const router = useRouter();
  const { setSelectedAccount, theme } = useAppContext();
  const isDark = theme === "dark";

  const openAccount = (account: any) => {
    setSelectedAccount(account);
    router.push("/accountDetails");
  };

  return (
    <SafeAreaView style={[styles.screen, isDark && styles.darkScreen]} edges={["top"]} >
      <ScrollView style={isDark && styles.darkScreen}>
        <View style={styles.header}>
          <Ionicons name="help-circle-outline" size={34} color="white" />
        </View>

        <View style={[styles.sectionTitleRow, isDark && styles.darkCard]}>
          <Text style={[styles.mainTitle, isDark && styles.darkText]}>
            Account Summary
          </Text>
          <Text style={[styles.menuDots, isDark && styles.darkText]}>⋮</Text>
        </View>

        <View style={[styles.quickActions, isDark && styles.darkCard]}>
          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <MaterialCommunityIcons name="cash-sync" size={36} color="#0066b3" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Transfer
            </Text>
          </View>

          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <Ionicons name="paper-plane-outline" size={36} color="#0066b3" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Send
            </Text>
          </View>

          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <Ionicons name="document-text-outline" size={36} color="#0066b3" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Deposit
            </Text>
          </View>
        </View>

        <View style={[styles.grayHeader, isDark && styles.darkSection]}>
          <Text style={[styles.grayHeaderText, isDark && styles.darkText]}>
            Banking
          </Text>
          <Ionicons name="add" size={38} color="#0066b3" />
        </View>

        <View style={[styles.whiteSection, isDark && styles.darkCard]}>
          {bankingAccounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onPress={() => openAccount(account)}
            />
          ))}

          <View style={[styles.totalRow, isDark && styles.darkBorder]}>
            <Text style={[styles.totalLabel, isDark && styles.darkText]}>
              Total
            </Text>
            <Text style={[styles.totalAmount, isDark && styles.darkText]}>
              1,180.78
            </Text>
          </View>

          <Text style={styles.link}>Transaction Limits</Text>
        </View>

        <View style={[styles.grayHeader, isDark && styles.darkSection]}>
          <Text style={[styles.grayHeaderText, isDark && styles.darkText]}>
            Credit Cards
          </Text>
          <Ionicons name="add" size={38} color="#0066b3" />
        </View>

        <View style={[styles.whiteSection, isDark && styles.darkCard]}>
          {creditAccounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onPress={() => openAccount(account)}
            />
          ))}

          <View style={[styles.totalRow, isDark && styles.darkBorder]}>
            <Text style={[styles.totalLabel, isDark && styles.darkText]}>
              Total
            </Text>
            <Text style={[styles.totalAmount, isDark && styles.darkText]}>
              159.46
            </Text>
          </View>
        </View>

        <View style={[styles.grayHeader, isDark && styles.darkSection]}>
          <Text style={[styles.grayHeaderText, isDark && styles.darkText, { paddingTop: 12 ,paddingBottom: 5}]}>
            Investments
          </Text>
        </View>

        <View style={[styles.investmentSection, isDark && styles.darkCard]}>
          <Text style={styles.openAccountText}>+ Open an account</Text>
        </View>

        <View style={[styles.infoSection, isDark && styles.darkSection]}>
          <View style={styles.infoRow}>
            <Ionicons name="information-circle" size={24} color="#0070c9" />
            <Text style={[styles.infoText, isDark && styles.darkText]}>
              Important Information
            </Text>
          </View>
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
  sectionTitleRow: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "300",
    color: "#444",
  },
  menuDots: {
    fontSize: 27,
    fontWeight: "500",
    color: "#444",
  },
  quickActions: {
    backgroundColor: "white",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actionCard: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderColor: "#dce3e8",
    borderRadius: 4,
    padding: 14,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  actionText: {
    fontSize: 13,
    color: "#111",
    fontWeight: "500",
  },
  grayHeader: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  grayHeaderText: {
    fontSize: 20,
    color: "#555",
    fontWeight: "300",
  },
  whiteSection: {
    backgroundColor: "white",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: "#e2e7ea",
  },
  totalLabel: {
    fontSize: 14,
    color: "#444",
    fontWeight: "600",
    paddingTop: 3,
  },
  totalAmount: {
    fontSize: 18,
    color: "#444",
    fontWeight: "700",
  },
  link: {
    color: "#0070c9",
    fontSize: 14,
    textAlign: "right",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderTopWidth: 1,
    borderColor: "#e2e7ea",
  },
  progressBar: {
    height: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#aaa",
    marginHorizontal: 20,
    marginTop: 10,
  },
  progressFill: {
    width: "16%",
    height: "100%",
    backgroundColor: "#2d9bc4",
  },
  creditLimit: {
    fontSize: 16,
    color: "#555",
    textAlign: "right",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  investmentSection: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  openAccountText: {
    color: "#0070c9",
    fontSize: 14,
  },
  infoSection: {
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 12,
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
  darkBorder: {
    borderColor: "#374151",
  },
});