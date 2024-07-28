import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ProgressBar from "../components/progress";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/Button";

const nietPage = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.4);
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={progress} navigation={navigation} />

      <ScrollView style={styles.content}>
        <View style={styles.imageBlock}>
          <Image source={require("../assets/namaz.png")} />
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Declaration of Intention (Niyat)</Text>
          <Text style={styles.btnText}>
            After ghusl, the pilgrim should proclaim the internal intention
            (niyyat) for Umrah. To strengthen this intention, it is advisable to
            face the qiblah and recite the niyyat.
          </Text>
        </View>

        <View style={styles.btnTitle2}>
          <Text style={styles.headerText}>اللهم لبيك عمرة</Text>
          <Text style={styles.headerText}>
            Allahumma Labbaika umratan (O Allah, I have come to perform Umrah)
          </Text>
        </View>

        <View>
          <Text style={styles.btnText}>
            The recitation reminds the pilgrim to observe all rituals with
            sincerity and piety.
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
    paddingHorizontal: 20,
  },
  imageBlock: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleView: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  btnText: {
    paddingVertical: 10,
    color: "#878787",
    fontSize: 18,
  },
  btnTitle2: {
    padding: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10
  },

  bottomView: {
    bottom: "3%",
  },
});

export default nietPage;
