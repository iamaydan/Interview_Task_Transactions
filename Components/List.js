import React from "react";
import { Avatar, Divider } from "react-native-elements";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const List = ({ item, navigation }) => {
  return (
    <View style={styles.list}>
      {item.map((key) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { item: key })}
          style={styles.row}
          key={key.name}
        >
          <View style={styles.user}>
            <Avatar size={30} rounded source={key.uri} />
            <Text style={styles.name}>{key.name}</Text>
          </View>
          <Text style={styles.amount}>${key.amount}</Text>
        </TouchableOpacity>
      ))}
      <Divider />
      <Divider />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
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
