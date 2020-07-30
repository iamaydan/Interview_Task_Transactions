import React from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

import { Detail } from "../Components/Detail";

export const DetailsScreen = ({ route }) => {
  const { item } = route?.params;
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${item.amount}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Card details")}
        >
          <Icon name="credit-card" size={18} color="#000" />
          <Text style={styles.btnText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Debt details")}
        >
          <Icon name="dollar-sign" size={18} color="#000" />
          <Text style={styles.btnText}>Debt</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.details}>Transaction Details</Text>
      <Divider />
      <View style={styles.list}>
        <Detail label="Payment Detail" data={item.date} />
        <Divider />
        <Detail label="Type" data={item.type} />
        <Divider />
        <Detail label="Pay With" data={item.payWith} />
        <Divider />
      </View>
      <Divider />
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
    width: 100,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btnText: {
    color: "#464646",
    marginLeft: 5,
  },
  details: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
});
