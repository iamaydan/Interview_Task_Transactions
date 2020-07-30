import React from "react";
import { View, StyleSheet, Platform, Text, ScrollView } from "react-native";

export const DetailsScreen = ({ route }) => {
  console.log("route", route);
  const { item } = route?.params;
  return (
    <View style={styles.container}>
      <Text>${item.amount}</Text>
      <Text>{item.date}</Text>
      <Text>{item.payWith}</Text>
      <Text>{item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 20 : 24,
  },
});
