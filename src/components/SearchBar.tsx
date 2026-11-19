import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeTexts: (text: string) => void;
};

export default function SearchBar({ value, onChangeTexts }: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={17}
        style={{ marginRight: 10, color: "#FFF" }}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for songs, artists,..."
        placeholderTextColor={"#FFF"}
        value={value}
        onChangeText={onChangeTexts}
        autoFocus
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 20,
    paddingBottom: 20,
    paddingTop: 16,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingLeft: 20 /* padding items inside the container */,
    paddingRight: 20,
  },
  searchInput: {
    color: "#FFF",
    flex: 1,
  },
});
