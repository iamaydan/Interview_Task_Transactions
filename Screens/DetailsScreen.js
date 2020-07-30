import React from "react";
import { View, StyleSheet, Platform, Text, ScrollView } from "react-native";

export const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>hey</Text>
      </ScrollView>
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
