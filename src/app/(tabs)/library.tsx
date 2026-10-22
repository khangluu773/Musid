import React from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Library() {
  return (
    <SafeAreaView style={{flex: 1}}>
    
      <Text
        style={{ color: "white"}}
      >
        Library</Text>

        <Text style={{color: "white"}}> Hello</Text>
    
    </SafeAreaView>
  );
}