import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import backIcon from '../assets/images/Union.png';
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";
import CustomButton from "../components/Button"


const DataPage = ({ img, title, description }) => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <ScrollView>
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

        <View>
          <Text style={styles.cardTitleSecond}>
            Umrah consists of the following rituals:
          </Text>
          <View style={styles.list}>
            <View style={styles.row}>
              <Image source={first} style={styles.icon} />
              <Text style={styles.listText}>Ihram</Text>
            </View>
            <View style={styles.row}>
              <Image source={second} style={styles.icon} />
              <Text style={styles.listText}>Tawaf</Text>
            </View>
            <View style={styles.row}>
              <Image source={third} style={styles.icon} />
              <Text style={styles.listText}>Say’i between as-Safa and al-Marwa</Text>
            </View>
            <View style={styles.row}>
              <Image source={fourth} style={styles.icon} />
              <Text style={styles.listText}>Shaving or taming the hair</Text>
            </View>
          </View>
          <View style={styles.row}></View>
          <View style={styles.list}>
            <View style={styles.row}></View>
                <View style={styles.step}>
                    <Text style={styles.stepText}>Step 1</Text>
                </View>
                <View style={styles.row}></View>
                <Text style={styles.bottomText}>Ihram</Text>
                <View style={styles.row}></View>
                <CustomButton text={"Start learning"}  color={'#11A5751A'} textColor={'#11A575'} onPress={'start'} ></CustomButton>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 14,
    paddingTop: 72,
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 56,
    left: 14,
  },
  backIcon: {
    width: 16,
    height: 16,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  cardTitleSecond: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
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
  list: {
    width: 366,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  listText: {
    fontSize: 18,
  },
  stepText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 700, 
    fontSize: 16,
  },
  step: {
    borderRadius: 5,
    backgroundColor: '#11A575',
    width: 72,
    height: 24,
    
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default DataPage;
