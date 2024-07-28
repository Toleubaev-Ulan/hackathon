import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../components/progress";
import ContentCard from "../components/ContentCard";
import CustomButton from "../components/Button";

const Preparation = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.2);

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={progress} navigation={navigation} />

      <ScrollView style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Preparation and General Purification of the Body (Ghusl)
          </Text>
        </View>

        <View style={styles.btnTitle}>
          <Text>
            Ghusl is a complete washing of the body that symbolizes purification
            and preparation for sacred rituals.
          </Text>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Ghusl involves the following steps:</Text>
        </View>

        <ContentCard
          img={require("../assets/niet.png")}
          title={"Intention (Niyat): "}
          description={
            "Before starting the pilgrimage, the pilgrim must sincerely intend to perform Umrah for the sake of Allah."
          }
        />
        <ContentCard
          img={require("../assets/daret.png")}
          title={"External Cleanliness (Ghusl): "}
          description={
            "Before entering the state of Ihram, the pilgrim must perform Ghusl - a complete ablution."
          }
        />
        <ContentCard
          img={require("../assets/husl.png")}
          title={"Washing the Whole Body: "}
          description={
            "Particular attention should be paid to places where sweat or dirt often accumulates."
          }
        />

        <View style={styles.error}>
          <Text style={styles.errorText}>
            Remember, while in the state of ihram, you cannot cut your hair,
            shave, trim your nails, or use incense. These actions must be done
            before entering ihram.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomView}>
        <CustomButton
          text="Continue"
          color={"#11A575"}
          textColor={"white"}
          onPress={"nietPage"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 14,
  },
  titleView: {
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  btnTitle: {
    padding: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    marginVertical: 10,
  },

  error: {
    padding: 12,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "red",
  },
  errorText: {
    color: 'red'
  },

  bottomView: {
    bottom: "3%",
  },
});

export default Preparation;
