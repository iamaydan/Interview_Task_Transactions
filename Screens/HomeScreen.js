import React, { useState } from "react";
import { View, StyleSheet, Platform, Text, ScrollView } from "react-native";
import { SearchBar, Divider, Avatar } from "react-native-elements";
import ProgressCircle from "react-native-progress-circle";

import { DUMMY } from "../dummy";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transactions</Text>
      <SearchBar
        lightTheme
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        placeholderTextColor="#c1c8ce"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.input}
      />
      <Text style={styles.heading2}>Performance</Text>
      <Divider />
      <View style={styles.progressContainer}>
        <View style={styles.progress}>
          <Text style={styles.progressHeading}>Current Week</Text>
          <ProgressCircle
            percent={64}
            radius={50}
            borderWidth={8}
            color="#80e1ae"
            shadowColor="#eff1f2"
            bgColor="#fff"
          >
            <Text style={[styles.progressInner, { color: "#80e1ae" }]}>
              64%
            </Text>
          </ProgressCircle>
        </View>

        <View style={styles.progress}>
          <Text style={styles.progressHeading}>Last Week</Text>
          <ProgressCircle
            percent={40}
            radius={50}
            borderWidth={8}
            color="#f8606a"
            shadowColor="#eff1f2"
            bgColor="#fff"
          >
            <Text style={[styles.progressInner, { color: "#f8606a" }]}>
              40%
            </Text>
          </ProgressCircle>
        </View>

        <View style={styles.progress}>
          <Text style={styles.progressHeading}>Last Month</Text>
          <ProgressCircle
            percent={90}
            radius={50}
            borderWidth={8}
            color="#606af9"
            shadowColor="#eff1f2"
            bgColor="#fff"
          >
            <Text style={[styles.progressInner, { color: "#606af9" }]}>
              90%
            </Text>
          </ProgressCircle>
        </View>
      </View>
      <ScrollView>
        {DUMMY.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item })}
          >
            <View style={styles.list}>
              <Avatar
                rounded
                source={{
                  uri: item.uri,
                }}
              />
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 20 : 24,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#36424a",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 15,
  },
  searchBar: {
    backgroundColor: "#c1c8ce",
    height: "7%",
  },
  input: {
    height: "100%",
    backgroundColor: "#fff",
  },
  heading2: {
    color: "#36424a",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 8,
    marginVertical: 15,
  },
  progressContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  progress: {
    alignItems: "center",
  },
  progressHeading: {
    color: "#acb5be",
    marginVertical: 15,
    fontWeight: "bold",
  },
  progressInner: {
    fontSize: 18,
    color: "#606af9",
    fontWeight: "bold",
  },
  list: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
  },
});
