import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {   Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

const HajjDatePicker = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Hajj/Umra Date</Text>
      <View style={styles.selectContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipbtn} onPress={() => router.push('/main')}>
          <Text style={styles.skipbuttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.marginTop]} onPress={() => router.push('/index')}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  selectContainer: {
  },
  skipbtn: {
    width: '100%',
    backgroundColor: '#B9BEBC',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  }, 
  skipbuttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#11A575',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 10, // Space between the buttons
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HajjDatePicker;
