import React from "react";
import { View, StyleSheet, Platform, Text, ScrollView } from "react-native";

export const DetailsScreen = ({ route }) => {
  const { item } = route?.params;
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${item.amount}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Text>Card</Text>
        </View>
        <View style={styles.button}>
          <Text>Debt</Text>
        </View>
      </View>
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
  },
  amount: {
    fontSize: 35,
    alignSelf: "center",
    marginVertical: 25,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    width: 80,
    backgroundColor: "#e0e0e0",
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
