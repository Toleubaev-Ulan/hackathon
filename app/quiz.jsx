import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import Tasks from "../components/Test";
import background from "../assets/background.png";

const quiz = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [progress, setProgress] = useState(0.09);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.divBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Image
              source={require("../assets/images/Union.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.barBackground}>
            <View style={[styles.bar, { width: `${progress * 100}%` }]}></View>
          </View>
        </View>
        <Tasks
          img={background}
          question={"Match each term with its correct description"}
          answer1={"A special full-body wash done before important prayers and religious activities"}
          answer2={"Ghusl"}
          answer3={"Intention (Niyat)"}
          answer4={"Two white pieces of cloth, one wrapped around the waist and the other draped over the shoulders."}
          answer5={"Sincerely intending to perform Umrah for the sake of Allah."}
          answer6={"Ihram Clothing (Men)"}
          
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  divBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: 'relative',
    left: 16,
  },
  content: {
    flexDirection: "column",
    flex: 1,
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

export default quiz;
