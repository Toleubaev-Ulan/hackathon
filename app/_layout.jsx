import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
       <Tabs.Screen
        name="HajjDatePicker"
        options={{
          title: "Hajj Date Picker",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: "Main",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="preparation"
        options={{
          title: "Preparation",
          headerShown: false,
        }}
      />
     
    
    </Tabs>
  );
};

export default _layout;
