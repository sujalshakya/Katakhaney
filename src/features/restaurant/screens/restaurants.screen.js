import { Text, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

export const RestaurantScreen=()=> {
  return(
    <>
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16, backgroundColor: "yellow" }}>
        <Searchbar/>
      </View>

      <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
        <Text>Resturant list</Text>
      </View>

      
    </SafeAreaView>
    </>
  );
}

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // // justifyContent: "center",
  },
});

