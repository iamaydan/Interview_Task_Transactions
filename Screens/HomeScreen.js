import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar, Divider } from "react-native-elements";

import { DUMMY } from "../dummy";
import { Progress, List } from "../Components";
import { ScrollView } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        placeholderTextColor="#c1c8ce"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.input}
      />
      <Text style={styles.heading}>Performance</Text>
      <Divider />
      <View style={styles.progressContainer}>
        {DUMMY.map((item) => (
          <Progress
            key={item.color}
            color={item.color}
            percent={item.percentage}
            label={item.label}
          />
        ))}
      </View>
      <Text style={styles.heading}>Transactions</Text>
      <Divider />
      <ScrollView style={styles.body}>
        {DUMMY.map((item) => (
          <List key={item.label} item={item.users} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  searchBar: {
    backgroundColor: "#c1c8ce",
    height: "8%",
    marginVertical: 15,
  },
  input: {
    height: "100%",
    backgroundColor: "#fff",
  },
  heading: {
    color: "#36424a",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 15,
  },
  progressContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  body: {
    paddingTop: 20,
  },
});
