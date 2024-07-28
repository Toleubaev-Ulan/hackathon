import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const quiz = () => {
      const [progress, setProgress] = useState(0.09);
  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 5,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  barBackground: {
    height: 10.11,
    width: 336.12,
    backgroundColor: "#D9D9D9",
    borderRadius: 4.87,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#11A575",
    borderRadius: 4.87,
  },
});

export default quiz