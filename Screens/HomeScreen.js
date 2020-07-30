import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar, Divider, Avatar } from "react-native-elements";

import { DUMMY } from "../dummy";
import { Progress } from "../Components/Progress";

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
        <Progress color="#80e1ae" percent="64" heading="Current Week" />
        <Progress color="#f8606a" percent="40" heading="Last Week" />
        <Progress color="#606af9" percent="90" heading="Last Month" />
      </View>
      <Text style={styles.heading}>Transactions</Text>
      <Divider />
      <ScrollView style={styles.body}>
        {DUMMY.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <View style={styles.list}>
              <Avatar size={30} rounded source={item.uri} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>${item.amount}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
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
    marginVertical: 15,
  },
  list: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  name: {
    marginLeft: 10,
  },
  amount: {
    position: "absolute",
    right: 20,
    color: "#a7a7a7",
    fontWeight: "bold",
  },
});
