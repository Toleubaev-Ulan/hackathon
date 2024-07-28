 import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import cancel from '../assets/images/Union.png';
import ContentCard from "../components/ContentCard";
import CustomButton from "../components/Button";
import daret from '../assets/images/daret.png';
import oku from '../assets/images/oku.png';
import niet from '../assets/images/niet.png';
import { useRouter } from 'expo-router';

const Preparation = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.09); // Progress value between 0 and 1

  return (
    <View style={styles.container}>
      <View style={styles.divBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/index')}>
          <Image source={cancel} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.barBackground}>
          <View style={[styles.bar, { width: `${progress * 100}%` }]}></View>
        </View>       
      </View>

      <View style={styles.content}>
        <View style={styles.titleView}>
            <Text style={styles.title}>Preparation</Text>
        </View>
        <ContentCard img={niet} title={"Intention (Niyat): "} description={"Before starting the pilgrimage, the pilgrim must sincerely intend to perform Umrah for the sake of Allah."}/>
        <ContentCard img={daret} title={"External Cleanliness (Ghusl): "} description={"Before entering the state of Ihram, the pilgrim must perform Ghusl - a complete ablution."}/>
        <ContentCard img={oku} title={"Clothing: "} description={"Men wear two white pieces of cloth (Ihram), one of which is wrapped around the waist and the other is draped over the shoulders. Women wear simple, modest clothing that covers the entire body except the face and hands."}/>
      </View>
      
      <View style={styles.bottomView}>
        <CustomButton text="Start" color={"#11A575"} textColor={"white"}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 64,
    flex: 1, // Ensure the container takes up the full height of the screen
    padding: 14,
  },
  divBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Add some space between the bar and the content
  },
  backButton: {
    marginRight: 5,
  },
  backIcon: {
    width: 20, // Adjust the size of the back icon as needed
    height: 20,
  },
  barBackground: {
    height: 10.11,
    width: 336.12,
    backgroundColor: '#D9D9D9',
    borderRadius: 4.87,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#11A575',
    borderRadius: 4.87,
  },
  content: {
    alignItems: 'center', // Center the content horizontally
    flex: 1, // Allow the content to take up the remaining space
  },
  titleView: {
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomView:{
    // position: 'absolute',
    // bottom:1,
    bottom: 96,
    right: 16,
    width: '110%',
    alignItems: 'center',
    paddingHorizontal: 20,
  }
});

export default Preparation;
