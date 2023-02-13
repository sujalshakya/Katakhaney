import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import RestaurantScreen from "./src/features/restaurant/screens/restaurants.screen";
export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // // justifyContent: "center",
  },
});
