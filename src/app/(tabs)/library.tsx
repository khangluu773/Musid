import { useState } from "react";
import { Button, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const searchMusic = async (query: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/search?q=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Search failed:", error)
  }
};

const testBackend = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/test"
    );

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Connection failed: ", error);
  }
}

export default function Library() {
  const [searchItems, setSearchItems] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* keep the content in a safe area on mobile screen */}

      <StatusBar barStyle="light-content" />
      {/* controls the appearance of phone's status bar (time, battery, signals) */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADERS - inside component */}
        <Header />

        <SearchBar 
          value={searchItems} 
          onChangeTexts={setSearchItems} />

        <Button
          title="Test Backend connection"
          onPress={testBackend}
        />
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

  header: {
    paddingBottom: 10,
    paddingTop: 10,
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
});
