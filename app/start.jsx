import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import ihram from '../assets/images/ihram.png';
import InfoPage from "../components/InfoPage.jsx";


const Startpage = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View>
        <InfoPage img={ihram} title={"Ihram"} description={"a special state of spiritual purity of a pilgrim performing the hajj. To be in it, one must wash the body completely, put on special clothes, and observe the rules of ihram."}/>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default Startpage;
