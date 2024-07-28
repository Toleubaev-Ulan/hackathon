import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import ProgressBar from "../components/progress";
import { useNavigation } from "@react-navigation/native";

const nietPage = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.4);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ProgressBar progress={progress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <View>
          <Image source={require("../assets/namaz.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
  },
  conatiner: {
    flex: 1,
    padding: 14,
  },
});

export default nietPage;
