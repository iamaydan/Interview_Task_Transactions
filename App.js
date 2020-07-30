import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const { Navigator, Screen } = createStackNavigator();

import { HomeScreen, DetailsScreen } from "./Screens";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={({ navigation, route }) => ({
            title: route?.params.item.name,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  color="#f8606a"
                  size="25"
                  style={{ marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
