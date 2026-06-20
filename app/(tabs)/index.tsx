import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../../src/context/AppContext";

export default function HomeScreen() {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  return (
    <SafeAreaView style={[styles.screen]} edges={["top"]} >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          isDark && styles.darkScreen,
        ]}
      >
        <View style={styles.header}>
          <Ionicons name="help-circle-outline" size={34} color="white" />
        </View>
        <View style={styles.hero}>
          <Text style={styles.rbcText}>RBC Mobile</Text>
          <Text style={styles.greeting}>Good Evening</Text>

          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={34} color="white" />
            <Text style={styles.searchText}>Search RBC Mobile</Text>
          </View>
        </View>

        <View style={styles.quickActions}>
          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <Ionicons name="paper-plane-outline" size={34} color="#0070c9" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Send
            </Text>
          </View>

          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <MaterialCommunityIcons name="cash-sync" size={36} color="#0070c9" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Transfer
            </Text>
          </View>

          <View style={[styles.actionCard, isDark && styles.darkCard]}>
            <Ionicons name="document-text-outline" size={34} color="#0070c9" />
            <Text style={[styles.actionText, isDark && styles.darkText]}>
              Pay bills
            </Text>
          </View>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Accounts Overview
          </Text>
          <Text style={[styles.dots, isDark && styles.darkText]}>⋮</Text>
        </View>

        <View style={[styles.accountBox, isDark && styles.darkCard]}>
          <View style={[styles.accountRow, isDark && styles.darkBorder]}>
            <Text style={[styles.accountName, isDark && styles.darkText]}>
              Chequing (0628)
            </Text>
            <Text style={[styles.amount, isDark && styles.darkText]}>
              28.55  ›
            </Text>
          </View>

          <View style={[styles.accountRow, isDark && styles.darkBorder]}>
            <Text style={[styles.accountName, isDark && styles.darkText]}>
              Savings (0610)
            </Text>
            <Text style={[styles.amount, isDark && styles.darkText]}>
              1,152.23  ›
            </Text>
          </View>

          <View style={[styles.accountRow, isDark && styles.darkBorder]}>
            <Text style={[styles.accountName, isDark && styles.darkText]}>
              MasterCard (5154)
            </Text>
            <Text style={[styles.amount, isDark && styles.darkText]}>
              159.46  ›
            </Text>
          </View>

          <View style={[styles.accountLinks, isDark && styles.darkBorder]}>
            <Text style={styles.link}>Open an account</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.link}>View all</Text>
          </View>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection, { marginTop: 15 }]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Needs Attention
          </Text>
        </View>

        <View style={[styles.warningCard, isDark && styles.darkCard]}>
          <View style={styles.warningTop}>
            <Ionicons name="notifications" size={20} color="#c51f1a" />
            <Text style={styles.warningTitle}>
              Don’t fall for a bank impersonation scam
            </Text>
            <Text style={[styles.downArrow, isDark && styles.darkText]}>⌄</Text>
          </View>
          <Text style={[styles.warningText, isDark && styles.darkText]}>
            RBC will NEVER ask you to send money or give y...
          </Text>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection, { marginTop: 70 }]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            NOMI
          </Text>
          <Text style={[styles.dots, isDark && styles.darkText]}>⋮</Text>
        </View>

        <View style={[styles.nomiCard, isDark && styles.darkCard]}>
          <View style={[styles.nomiHeader, isDark && styles.darkBorder]}>
            <Text style={[styles.insights, isDark && styles.darkText]}>
              Insights
            </Text>
            <Text style={styles.link}>View all</Text>
          </View>

          <View style={styles.spendingRow}>
            <View style={[styles.dateBox, isDark && styles.darkBorder]}>
              <Text style={[styles.month, isDark && styles.darkText]}>JUN</Text>
              <Text style={[styles.day, isDark && styles.darkText]}>15</Text>
            </View>

            <View style={styles.spendingContent}>
              <Text style={[styles.spendingTitle, isDark && styles.darkText]}>
                Your Spending
              </Text>
              <Text style={[styles.spendingText, isDark && styles.darkText]}>
                Compare your spending so far this month with previous ones.
              </Text>

              <View style={styles.chart}>
                <View style={styles.smallBar} />
                <View style={styles.bar} />
                <View style={styles.tallBar} />
                <View style={styles.mediumBar} />
                <View style={styles.blueBar} />
              </View>

              <Text style={[styles.chartMonths, isDark && styles.darkText]}>
                Feb         Mar         Apr         May         Jun
              </Text>
              <Text style={styles.viewDetails}>View Details</Text>
            </View>
          </View>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection, { marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Credit Cards
          </Text>
        </View>

        <View style={[styles.creditCard, isDark && styles.darkCard]}>
          <View style={styles.creditTop}>
            <Text style={[styles.accountName, isDark && styles.darkText]}>
              MasterCard (5154)
            </Text>
            <Text style={[styles.amount, isDark && styles.darkText]}>
              159.46 ›
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Text style={[styles.creditLimit, isDark && styles.darkText]}>
            Credit Limit: 1,000.00
          </Text>

          <View style={[styles.paymentBox, isDark && styles.darkBorder]}>
            <Text style={[styles.paymentText, isDark && styles.darkText]}>
              Minimum payment of $10.00 due:
            </Text>
            <Text style={[styles.paymentDate, isDark && styles.darkText]}>
              10 Jun 2026
            </Text>
          </View>

          <Text style={styles.payNow}>Pay Now</Text>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection, { marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            New Feature
          </Text>
        </View>

        <View style={[styles.featureCard, isDark && styles.darkCard]}>
          <View style={styles.featureRow}>
            <Ionicons name="flag-outline" size={44} color="#55758a" />
            <Text style={[styles.featureTitle, isDark && styles.darkText]}>
              Get $50 to kick-start your kids’ savings
            </Text>
          </View>

          <Text style={[styles.featureText, isDark && styles.darkText]}>
            Open a no-monthly fee Leo’s Young Savers Account for your child aged
            0-12 to get started.
          </Text>

          <Text style={styles.openAccount}>Open an Account</Text>
        </View>

        <View style={[styles.sectionHeader, isDark && styles.darkSection, { marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
            Split with Friends
          </Text>
        </View>

        <View style={[styles.splitCard, isDark && styles.darkCard]}>
          <Text style={[styles.splitText, isDark && styles.darkText]}>
            In three quick steps, collect money from your friends for shared
            expenses.
          </Text>

          <View style={[styles.amountBox, isDark && styles.darkBorder]}>
            <Text style={[styles.amountBoxText, isDark && styles.darkText]}>
              First, tell us how much you'd like to split
            </Text>
            <Text style={[styles.zero, isDark && styles.darkText]}>0.00</Text>
          </View>

          <View style={styles.splitButton}>
            <Text style={styles.splitButtonText}>Split It</Text>
          </View>

          <Text style={styles.history}>View Request Money History</Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#006dbb"
  },
  header: {
    height: 65,
    backgroundColor: "#006dbb",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 24,
  },
  container: {
    backgroundColor: "#eef3f6"
  },
  hero: {
    backgroundColor: "#006dbb",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
  },
  rbcText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300"
  },
  greeting: {
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    marginBottom: 14
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 18,
    gap: 10,
  },
  searchText: {
    color: "white",
    fontSize: 18
  },
  quickActions: {
    flexDirection: "row",
    gap: 10,
    padding: 17
  },
  actionCard: {
    flex: 1,
    height: 100,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#dce3e8",
    padding: 14,
    justifyContent: "space-between",
  },
  actionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222"
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eef3f6",
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#555"
  },
  dots: {
    fontSize: 30,
    fontWeight: "800",
    color: "#000000"
  },
  accountBox: {
    backgroundColor: "white"
  },
  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#e2e7ea",
  },
  accountName: {
    fontSize: 16,
    fontWeight: "300",
    color: "#444"
  },
  amount: {
    fontSize: 16,
    fontWeight: "300",
    color: "#444"
  },
  accountLinks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 18,
    padding: 13,
    borderTopWidth: 1,
    borderColor: "#e2e7ea",
  },
  link: {
    color: "#0070c9",
    fontSize: 15,
    fontWeight: "300"
  },
  divider: {
    color: "#ddd",
    fontSize: 18
  },
  warningCard: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dde4e8",
  },
  warningTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  warningTitle: {
    flex: 1,
    color: "#db5858",
    fontSize: 14,
    fontWeight: "400"
  },
  downArrow: {
    fontSize: 30,
    color: "#888"
  },
  warningText: {
    color: "#555",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 9
  },
  nomiCard: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dde4e8"
  },
  nomiHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#e5e8eb"
  },
  insights: {
    fontSize: 15,
    color: "#444"
  },
  spendingRow: {
    flexDirection: "row",
    padding: 18
  },
  dateBox: {
    width: 50,
    borderRightWidth: 1,
    borderColor: "#e2e2e2"
  },
  month: {
    fontSize: 12,
    color: "#555"
  },
  day: {
    fontSize: 24,
    color: "#555"
  },
  spendingContent: {
    flex: 1,
    paddingLeft: 16
  },
  spendingTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: "#555",
    marginTop: 8,
    marginBottom: 22
  },
  spendingText: {
    fontSize: 15,
    fontWeight: "300",
    color: "#666",
    lineHeight: 18
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: 120,
    marginTop: 20,
    marginBottom: 20
  },
  smallBar: {
    width: 18,
    height: 14,
    borderRadius: 8,
    backgroundColor: "#ddd"
  },
  bar: {
    width: 18,
    height: 75,
    borderRadius: 8,
    backgroundColor: "#ddd"
  },
  tallBar: {
    width: 18,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#ddd"
  },
  mediumBar: {
    width: 18,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#ddd"
  },
  blueBar: {
    width: 18,
    height: 7,
    borderRadius: 8,
    backgroundColor: "#4fb3df"
  },
  chartMonths: {
    fontSize: 16,
    color: "#555",
    textAlign: "center"
  },
  viewDetails: {
    color: "#0070c9",
    fontSize: 16,
    textAlign: "right",
    marginTop: 25
  },
  creditCard: {
    backgroundColor: "white",
    padding: 20
  },
  creditTop: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#aaa",
    marginTop: 16
  },
  progressFill: {
    width: "16%",
    height: "100%",
    backgroundColor: "#2d9bc4"
  },
  creditLimit: {
    textAlign: "right",
    color: "#555",
    fontSize: 12,
    marginTop: 10
  },
  paymentBox: {
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#e5e5e5",
    marginTop: 20,
    paddingTop: 10
  },
  paymentText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#555"
  },
  paymentDate: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,

  },
  payNow: {
    color: "#0070c9",
    fontSize: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
    textAlign: "right",
    marginVertical: 10,
    paddingVertical: 15
  },
  featureCard: {
    backgroundColor: "white",
    padding: 18
  },
  featureRow: {
    flexDirection: "row",
    gap: 20,
    alignItems: "flex-start"
  },
  featureTitle: {
    flex: 1,
    fontSize: 20,
    color: "#555",
    fontWeight: "300"
  },
  featureText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#444",
    marginTop: 20,
    paddingBottom: 20,
    lineHeight: 15,
    borderBottomWidth: 1,
    borderColor: "#e5e5e5"
  },
  openAccount: {
    color: "#0070c9",
    fontSize: 14,
    textAlign: "right",
    marginTop: 15
  },
  splitCard: {
    backgroundColor: "white",
    padding: 20
  },
  splitText: {
    fontSize: 17,
    fontWeight: "300",
    textAlign: "center",
    color: "#555",
    lineHeight: 16,
    marginBottom: 30
  },
  amountBox: {
    borderWidth: 1,
    borderColor: "#dce3e8",
    borderRadius: 8,
    padding: 20,
    alignItems: "center"
  },
  amountBoxText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444"
  },
  zero: {
    fontSize: 56,
    fontWeight: "700",
    color: "#777",
    marginTop: 8
  },
  splitButton: {
    backgroundColor: "#0070c9",
    marginTop: 30,
    paddingVertical: 15,
    alignItems: "center"
  },
  splitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 5
  },
  history: {
    color: "#0070c9",
    fontSize: 15,
    textAlign: "right",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: "#e5e5e5"
  },
  darkScreen: {
    backgroundColor: "#1f2937",
  },
  darkCard: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
  },
  darkSection: {
    backgroundColor: "#111827",
  },
  darkText: {
    color: "white",
  },
  darkBorder: {
    borderColor: "#374151",
  },
});