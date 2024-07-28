import { View, Text, SafeAreaView,Image, ScrollView } from "react-native";
import React, { useState } from "react";
import ProgressBar from "../components/progress";
import { useNavigation } from "@react-navigation/native";

const nietPage = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.4);
  return (
    <SafeAreaView>
      <ProgressBar progress={progress} navigation={navigation} />

      <ScrollView>
        <Image source={require('../assets/namaz.png')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default nietPage;
