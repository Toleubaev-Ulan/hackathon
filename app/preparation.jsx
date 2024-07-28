import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../components/progress"; // Импорт компонента ProgressBar
import ContentCard from "../components/ContentCard";
import CustomButton from "../components/Button";
import daret from "../assets/images/daret.png";
import oku from "../assets/images/oku.png";
import niet from "../assets/images/niet.png";

const Preparation = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.09);

  return (
    <SafeAreaView style={styles.container}>
      {/* Компонент ProgressBar */}
      <ProgressBar progress={progress} navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Preparation</Text>
        </View>
        <ContentCard
          img={niet}
          title={"Intention (Niyat): "}
          description={
            "Before starting the pilgrimage, the pilgrim must sincerely intend to perform Umrah for the sake of Allah."
          }
        />
        <ContentCard
          img={daret}
          title={"External Cleanliness (Ghusl): "}
          description={
            "Before entering the state of Ihram, the pilgrim must perform Ghusl - a complete ablution."
          }
        />
        <ContentCard
          img={oku}
          title={"Clothing: "}
          description={
            "Men wear two white pieces of cloth (Ihram), one of which is wrapped around the waist and the other is draped over the shoulders. Women wear simple, modest clothing that covers the entire body except the face and hands."
          }
        />
      </View>

      <View style={styles.bottomView}>
        <CustomButton
          text="Start"
          color={"#11A575"}
          textColor={"white"}
          onPress={() => navigation.navigate("quiz")} // Обновленный обработчик onPress
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  content: {
    alignItems: "center",
    flex: 1,
  },
  titleView: {
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomView: {
    bottom: "3%",
  },
});

export default Preparation;
