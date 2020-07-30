import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const Detail = ({ label, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.info}>
        <Text>{data}</Text>
        <Icon name="info" color="#1983ff" size={20} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 17,
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 5,
  },
});
