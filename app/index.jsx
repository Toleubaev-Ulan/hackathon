import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator="false">
      <View style={[styles.segment, styles.segment1]}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity
            key={`segment1-${index}`}
            style={styles.lesson}
            flex
            onPress={() => router.push("/details")}
          >
            <Image source={require('../assets/step.png')} style={styles.stepImg} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.segment, styles.segment2]}>
        {Array.from({ length: 3 }).map((_, index) => (
          <TouchableOpacity
            key={`segment2-${index}`}
            style={styles.lesson}
            onPress={() => router.push("/details")}
          ></TouchableOpacity>
        ))}
      </View>

      <View style={[styles.segment, styles.segment3]}>
        {Array.from({ length: 3 }).map((_, index) => (
          <TouchableOpacity
            key={`segment3-${index}`}
            style={styles.lesson}
            onPress={() => router.push("/details")}
          ></TouchableOpacity>
        ))}
      </View>

      <View style={[styles.segment, styles.segment4]}>
        {Array.from({ length: 2 }).map((_, index) => (
          <TouchableOpacity
            key={`segment4-${index}`}
            style={styles.lesson}
            onPress={() => router.push("/details")}
          ></TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  segment: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  segment1: {
    backgroundColor: "red",
  },
  segment2: {
    backgroundColor: "blue",
  },
  segment3: {
    backgroundColor: "green",
  },
  segment4: {
    backgroundColor: "yellow",
  },
  lesson: {
    marginVertical: 20,
  },
  stepImg: {
    width: 100,
    height: 100,
    
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Home;
