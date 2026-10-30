import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Library() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* keep the content in a safe area on mobile screen */}

      <StatusBar barStyle="light-content" />
      {/* controls the appearance of phone's status bar (time, battery, signals) */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADERS */}
        <View style={styles.header}>
          <View>
            <Text>MusID</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    paddingBottom: 100,
  },

  header: {},
});
