import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Divider } from "react-native-elements";

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
      <Text style={styles.details}>Transaction Details</Text>
      <Divider />
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text>Payment Detail</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Type</Text>
          <Text>{item.paymentWith}</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Pay With</Text>
          <Text>{item.type}</Text>
        </View>
      </View>
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
    marginVertical: 40,
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
    marginHorizontal: 10,
    marginBottom: 40,
  },
  details: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 15,
  },
});
