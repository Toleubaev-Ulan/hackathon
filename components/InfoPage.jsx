import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import backIcon from '../assets/images/back-button.png';
import CustomButton from "../components/Button";

const InfoPage = ({ img, title, description }) => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.info}>
          <View style={styles.imgContainer}>
            <Image source={img} style={styles.image} />
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="Start" color="#11A575" textColor="white" onPress={'preparation'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 14,
    paddingTop: 84,
    height: '100%',
  },
  backButton: {
    // position: 'absolute',
    // width: 48,
    // height: 48,
    // top: 56,
    // left: 14,
  },
  backIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#ececec',
    borderRadius: 12
  },
  content: {
    paddingBottom: 80, // Adjust to give space for the button
  },
  info: {
    position: 'relative',
    top: 12,
  },
  imgContainer: {
    borderRadius: 22.88,
    overflow: 'hidden',
    width: '100%',
    height: 247.05,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    alignItems: 'left',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 30.33,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left'
  },
  cardDescription: {
    color: '#878787',
    fontSize: 18,
    textAlign: 'left',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default InfoPage;
