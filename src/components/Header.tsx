import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>MusID</Text>
      </View>

      <View style={styles.HeaderMenu}>
        <Pressable style={styles.headerButton}>
          <Ionicons name="menu-outline" size={30} color="#FFF" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    paddingTop: 15,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "800",
  },
  HeaderMenu: {
    flexDirection: "row",
    gap: 10,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 19,
    backgroundColor: "#242424",
    justifyContent: "center",
    alignItems: "center",
  },
});
