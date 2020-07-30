import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const Detail = ({ label, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.info}>
        <Text>{data}</Text>
        <TouchableOpacity onPress={() => Alert.alert("Additional info")}>
          <Icon name="info" color="#1983ff" size={20} style={styles.icon} />
        </TouchableOpacity>
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
