import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import cancel from "../assets/images/Union.png";

const ProgressBar = ({ progress, navigation }) => {
  return (
    <View style={styles.divBar}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("index")}
      >
        <Image source={cancel} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.barBackground}>
        <View style={[styles.bar, { width: `${progress * 100}%` }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  barBackground: {
    height: 10,
    width: "80%",
    backgroundColor: "#D9D9D9",
    borderRadius: 6,
  },
  bar: {
    height: "100%",
    backgroundColor: "#11A575",
    borderRadius: 6,
  },
});

export default ProgressBar;
