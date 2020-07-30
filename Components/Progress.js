import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";

export const Progress = ({ label, percent, color }) => {
  return (
    <View style={styles.progress}>
      <Text style={styles.label}>{label}</Text>
      <ProgressCircle
        percent={percent}
        radius={50}
        borderWidth={8}
        color={color}
        shadowColor="#eff1f2"
        bgColor="#fff"
      >
        <Text style={[styles.inner, { color: color }]}>{percent}%</Text>
      </ProgressCircle>
    </View>
  );
};
const styles = StyleSheet.create({
  progress: {
    alignItems: "center",
  },
  label: {
    color: "#acb5be",
    marginBottom: 15,
    fontWeight: "bold",
  },
  inner: {
    fontSize: 20,
    color: "#606af9",
    fontWeight: "bold",
  },
});
