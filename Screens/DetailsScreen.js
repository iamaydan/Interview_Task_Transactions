import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";

export const DetailsScreen = ({ route }) => {
  const { item } = route?.params;
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${item.amount}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Icon name="credit-card" size={18} />
          <Text style={styles.btnText}>Card</Text>
        </View>
        <View style={styles.button}>
          <Icon name="dollar-sign" size={18} />
          <Text style={styles.btnText}>Debt</Text>
        </View>
      </View>
      <Text style={styles.details}>Transaction Details</Text>
      <Divider />
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listName}>Payment Detail</Text>
          <View style={styles.info}>
            <Text>{item.date}</Text>
            <Icon name="info" color="#1983ff" size={20} />
          </View>
        </View>
        <Divider />
        <View style={styles.listItem}>
          <Text style={styles.listName}>Type</Text>
          <View style={styles.info}>
            <Text>{item.type}</Text>
            <Icon name="info" color="#1983ff" size={20} />
          </View>
        </View>
        <Divider />
        <View style={styles.listItem}>
          <Text style={styles.listName}>Pay With</Text>
          <View style={styles.info}>
            <Text>{item.payWith}</Text>
            <Icon name="info" color="#1983ff" size={20} />
          </View>
        </View>
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
    width: 80,
    backgroundColor: "#e0e0e0",
    height: 30,
    borderRadius: 20,
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
  listItem: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  listName: {
    fontSize: 17,
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
});
