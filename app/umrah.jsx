import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import DataPage from '../components/DataPage';
import img from '../assets/images/kabba.png'

const Umrah = () => {
    const router = useRouter();
    const navigation = useNavigation();
    

    return (
        <View>
            <DataPage img={img} title={"What is umrah?"} description={`The Umrah (Arabic: عُمْرَة, lit. 'to visit a populated place') is an Islamic pilgrimage to Mecca, the holiest city for Muslims, located in the Hejazi region of Saudi Arabia. It can be undertaken at any time of the year, in contrast to the Ḥajj (/hædʒ/; "pilgrimage"), which has specific dates according to the Islamic lunar calendar.`}/>
        </View>
    );
};


export default Umrah;
