import React from "react";
import { Avatar } from "react-native-elements";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const List = ({ item, navigation }) => {
  const { name, amount, uri } = item.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { item: item.item })}
      style={styles.list}
    >
      <View style={styles.user}>
        <Avatar size={30} rounded source={uri} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.amount}>${amount}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 10,
  },
  amount: {
    color: "#a7a7a7",
    fontWeight: "bold",
  },
});
