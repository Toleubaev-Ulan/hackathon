import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import Card from "../components/Card";
import Gusl from "../assets/gusl.png";
import Niet from "../assets/niet.png";
import Kim from "../assets/image 6.png";

const Tasks = ({ img, question, answer1, answer2, answer3, answer4, answer5, answer6 }) => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.row}>
            <TouchableOpacity>
              <Card text={answer1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Card text={answer2} imgSrc={Gusl} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
              <Card text={answer3} imgSrc={Niet} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Card text={answer4} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
              <Card text={answer5} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Card text={answer6} imgSrc={Kim} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
});

export default Tasks;
